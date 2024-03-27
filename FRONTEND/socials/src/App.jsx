import * as React from 'react'
import "./App.css"
import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './Components/Auth/Login';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  )
}

export default App;
