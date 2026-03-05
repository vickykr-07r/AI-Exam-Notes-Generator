import axios from "axios"
import { useContext } from "react"
import { ServerContext } from "../Context/servercontext.jsx"
import { useState } from "react"
import { useEffect } from "react"
import Style from "../History/History.module.css"
import Naviagation from "../Navigation/Naviagation.jsx"
import FinalResult from "../FinalResult/FinalResult.jsx"
function History(){
     let{serverURL}=useContext(ServerContext)
     let[topics,setTopics]=useState([])
     let[selectedNotes,setSelectedNotes]=useState(null)
    useEffect(()=>{
    const mynotes=async()=>{
        try {
            let result=await axios.get(`${serverURL}/api/notes/getnotes`,{withCredentials:true})
            console.log(result.data)
            setTopics(Array.isArray(result.data)?result.data:[])
        } catch (error) {
            console.log(error)
        }
    }
    mynotes()
    },[])

    const openNotes=async(NoteId)=>{
      try {
        let result = await axios.get(`${serverURL}/api/notes/${NoteId}`,{withCredentials:true})
        setSelectedNotes(result.data.content)
        console.log(result.data.content)
      } catch (error) {
        console.log(error)
      }
    }
    return(
        <>
       <div className={Style.container}>
       <Naviagation />

       <div className={Style.data}>

      

       <div className={Style.main}>
    <div className={Style.sidebar}>
      {topics.length === 0 ? (
        <p className={Style.empty}>No history found</p>
      ) : (
        topics.map((t, i) => (
          <div key={i} className={Style.card} onClick={()=>{openNotes(t._id)}}>
            <h3 className={Style.topic}>{t.topic}</h3>

            <p className={Style.meta}>
              Class: <span>{t.classLevel}</span>
            </p>

            <p className={Style.meta}>
              Exam: <span>{t.examType}</span>
            </p>

            <div className={Style.tags}>
              {t.revisionMode && <span>Revision</span>}
              {t.includeChart && <span>Chart</span>}
              {t.includeDiagram && <span>Diagram</span>}
            </div>
          </div>
        ))
      )}
    </div>

    <div className={Style.content}>
    </div>
       </div>
        

        {selectedNotes &&
        <div className={Style.finalresult}>
        <FinalResult result={selectedNotes}/>
        </div>
        }
       
        </div>
</div>
        </>
    )
}
export default History;