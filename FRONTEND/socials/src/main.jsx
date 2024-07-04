import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Store from './Redux/store.js'
import { ModalProvider } from './Components/Pages/LoginModalContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store}>
        <ModalProvider>
      <ChakraProvider>
          <App />
      </ChakraProvider>
        </ModalProvider>
    </Provider>
  </BrowserRouter>
)
