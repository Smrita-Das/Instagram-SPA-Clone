import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Requests from './pages/Requests'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      
<Routes>

<Route path='/' element= {<Home/>}/>

</Routes>


    </>
  )
}

export default App
