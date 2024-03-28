import * as React from 'react'
import "./App.css"
import Navbar from './Routes/Navbar';
import AllRoutes from "./Routes/AllRoutes"

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <>
      
      <Navbar/>
      <AllRoutes />
    </>
  )
}

export default App;
