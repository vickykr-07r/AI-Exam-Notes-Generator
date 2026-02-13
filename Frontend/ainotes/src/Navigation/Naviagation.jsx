import { useSelector } from "react-redux"
import Style from "../Navigation/Naviagation.module.css"
import { IoDiamondSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
function Naviagation(){
    let {userData}=useSelector(state=>state.user)
    let credits=userData.credits
    let [showCredits,setShowCredits]=useState(false)
    return(
        <>
        <div className={Style.nav}>

        <div className={Style.navleft}>
         <h1>Ai Notes Generator</h1>
        </div>

        <div className={Style.navright}>
        <div className={Style.navrightbox} onClick={()=>{setShowCredits(!showCredits)}}>
         <span><IoDiamondSharp /></span>
         <span>{credits}</span>
         <span><FaPlus /></span>
        </div>
        </div>

        </div>

        {showCredits && (
        <div className={Style.creditPopup}>
          <h1>Buy Credits</h1>
          <p>Use Credits To Generate AI Notes,Diagrams & PDF's</p>
          <button>Buy Credits</button>
        </div>
         )}
        </>
    )
}

export default Naviagation