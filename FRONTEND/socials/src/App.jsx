import * as React from 'react'
import "./App.css"
import AllRoutes from "./Routes/AllRoutes"
import Navbar from './Routes/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      {/* <Landingpage /> */}
      {/* <button>hello</button> */}
    </>
  )
}

export default App;
