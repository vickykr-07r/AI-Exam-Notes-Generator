import { useDispatch, useSelector } from "react-redux"
import Style from "../Navigation/Naviagation.module.css"
import { IoDiamondSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaBook } from "react-icons/fa";
import axios from "axios"
import { ServerContext } from "../Context/servercontext.jsx";
import { useNavigate } from "react-router-dom";
import { setuserData } from "../Redux/userslice.js";
function Naviagation(){
    let {userData}=useSelector(state=>state.user)
    let credits=userData.credits
    let [showCredits,setShowCredits]=useState(false)
    let [showprofile,setShowProfile]=useState(false)
    let {serverURL}=useContext(ServerContext)
    let naviagte=useNavigate();
    let dispatch=useDispatch();
    async function handleSignout(){
     try {
        let result =await axios.get(`${serverURL}/api/auth/logout`,{withCredentials:true})
        dispatch(setuserData(null))
        naviagte("/isauth")
     } catch (error) {
        console.log(error)
     }
    }
    return(
        <>
        <div className={Style.nav}>

        <div className={Style.navleft}>
         <h1>Ai Notes Generator</h1>
        </div>

        <div className={Style.navright}>

        <div className={Style.navrightbox} onClick={()=>{setShowCredits(!showCredits); setShowProfile(false)}}>
         <span><IoDiamondSharp /></span>
         <span>{credits}</span>
         <span><FaPlus /></span>
        </div>

        <div className={Style.notes}>
         <button onClick={()=>{naviagte("/notes")}}><FaBook />Your Notes</button>
        </div>
         
         <div className={Style.profilebutton} onClick={()=>{setShowProfile(!showprofile);setShowCredits(false)}}>
            <button >{userData.name.slice(0,1)}</button>
         </div>

        </div>

        </div>

        {showCredits && (
        <div className={Style.creditPopup}>
          <h1>Buy Credits</h1>
          <p>Use Credits To Generate AI Notes,Diagrams & PDF's</p>
          <button onClick={()=>{naviagte("/pricing")}}>Buy Credits</button>
        </div>
         )}

         {showprofile && (
          <div className={Style.button}>
           <button>History</button>
           <button onClick={handleSignout}>Signout</button>
          </div>
         )}
        </>
    )
}

export default Naviagation