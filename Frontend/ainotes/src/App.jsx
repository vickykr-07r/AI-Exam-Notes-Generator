import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import IsAuth from './IsAuth/IsAuth'
import Home from './Home/Home'
import { useEffect } from 'react'
import getcurrentuser from './Service/api.js'
import { useDispatch, useSelector } from 'react-redux'
import Pricing from './Pricing/Pricing.jsx'
import History from './History/History.jsx'
import Notes from './Notes/Notes.jsx'
import { PaymentSuccess } from './PaymentSuccess/PaymentSuccess.jsx'
import { PaymentFailed } from './PaymentFailed/PaymentFailed.jsx'
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
      <Route path='/history' element={userData ? <History/>:<Navigate to="/isauth"/>}/>
      <Route path='/notes' element={userData ? <Notes/>:<Navigate to="/isauth"/>}/>
      <Route path='/pricing' element={userData ? <Pricing/>:<Navigate to="/isauth"/>}/>
      <Route path='/payment-success' element={<PaymentSuccess/>}/>
      <Route path='/payment-failed' element={<PaymentFailed/>}/>
    </Routes>
    </>
  )
}

export default App
