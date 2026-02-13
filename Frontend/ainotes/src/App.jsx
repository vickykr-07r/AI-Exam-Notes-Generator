import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import IsAuth from './IsAuth/IsAuth'
import Home from './Home/Home'
import { useEffect } from 'react'
import getcurrentuser from './Service/api.js'
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch=useDispatch();
    useEffect(()=>{
      getcurrentuser(dispatch)
    },[dispatch])

    let {userData}=useSelector(state=>state.user)
  return (
    <>
    <Routes>
      <Route path='/' element={userData ? <Home/>:<Navigate to="/isauth"/>}/>
      <Route path='/isauth' element={userData ? <Navigate to="/"/>:<IsAuth/>}/>
    </Routes>
    </>
  )
}

export default App
