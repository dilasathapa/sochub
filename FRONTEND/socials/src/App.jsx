import * as React from 'react'
import "./App.css"
import Navbar from './Routes/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import Landingpage from './Components/Landingpage';

function App() {
  return (
    <>
      <AllRoutes />
      <Landingpage />
      {/* <button>hello</button> */}
    </>
  )
}

export default App;
