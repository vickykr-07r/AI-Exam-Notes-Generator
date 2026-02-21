import Style from "../Notes/Notes.module.css"
import Naviagation from "../Navigation/Naviagation.jsx"
import { useContext, useState } from "react"
import axios from "axios"
import { ServerContext } from "../Context/servercontext.jsx"
import { useDispatch } from "react-redux"
import { updateCredits } from "../Redux/userslice.js"
function Notes(){
    const [data,setData]=useState({
    topic:"",
    classLevel:"",
    examType:"",
    revisionMode:false,
    includeDiagram:false,
    includeChart:false,
    result:null
    })
    let dispatch=useDispatch()
    function handleinput(event){
  setData({
    ...data,
    [event.target.name]:
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
  })
}
         let {serverURL}=useContext(ServerContext)
   async function handlesubmit(event){
         event.preventDefault()
        try {
            let result=await axios.post(`${serverURL}/api/notes/generatenotes`,data,{withCredentials:true})
            console.log(result.data)
            setData((pre)=>({
                ...pre,
                 result:result.data
            }))

            if(typeof result.creditsLeft==="number"){
               dispatch(updateCredits(result.data.creditsLeft))
            }
        } catch (error) {
          console.log(error)  
        }
    }
    return(
        <>
        <div className={Style.container}>
        <Naviagation/>
        <div className={Style.forms}>
         <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter topic(e.g. Web Development)" value={data.topic} name="topic" onChange={handleinput}/>
            <input type="text" placeholder="Class/Level (e.g. Class 10)" value={data.classLevel} name="classLevel" onChange={handleinput}/>
            <input type="text" placeholder="Exam Type (e.g. CBSE,JEE,NEET)" value={data.examType} name="examType" onChange={handleinput}/>
            <label><input type="checkbox" checked={data.revisionMode} onChange={handleinput} name="revisionMode"/> Revision Mode</label>
            <label><input type="checkbox" checked={data.includeDiagram} onChange={handleinput} name="includeDiagram"/> Include Diagram</label>
            <label><input type="checkbox" checked={data.includeChart} onChange={handleinput} name="includeChart"/> Include Chart</label>
            <button>Generate Notes</button>
         </form>
        </div>
        {data.result && (
  <div className={Style.result}>
    <h2>Generated Notes</h2>
    <pre>{JSON.stringify(data.result.data, null, 2)}</pre>
  </div>
)}
        </div>
        </>
    ) 
}
export default Notes