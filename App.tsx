import { View, Text } from 'react-native'
import React, { useState } from 'react'

//Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 charecters')
    .max(16, 'Should be max of 16 charecters')
    .required('length is required')
})

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPasswordGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const symbolsChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += symbolsChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex)

    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword('')
    setLowerCase(false)
    setNumbers(false)
    setSymbols(false)
    setUpperCase(false)
    setIsPasswordGenerated(false);
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App