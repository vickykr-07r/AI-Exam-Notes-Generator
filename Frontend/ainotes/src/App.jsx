import './App.css'
import { Routes,Route } from 'react-router-dom'
import IsAuth from './IsAuth/IsAuth'
import Home from './Home/Home'
import { useEffect } from 'react'
import getcurrentuser from './Service/api.js'
function App() {
    useEffect(()=>{
      getcurrentuser()
    },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/isauth' element={<IsAuth/>}/>
    </Routes>
    </>
  )
}

export default App
