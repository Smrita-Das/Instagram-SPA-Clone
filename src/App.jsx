import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Requests from './pages/Requests'
import { Routes, Route } from 'react-router-dom'
import UsersData from './UsersData'
import Navbar from './components/Navbar'
import About from './pages/About'
import Error from './pages/Error'


function App() {
  

  return (
    <>
      <Navbar/>
<Routes>

<Route path='/' element= {<Home/>}/>
<Route path='/about' element= {<About/>}/>
<Route path='/requests' element= {<Requests/>}/>
<Route path='*' element={<Error/>}/>

</Routes>


    </>
  )
}

export default App
