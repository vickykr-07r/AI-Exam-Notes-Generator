import Style from "../FinalResult/FinalResult.module.css"
import ReactMarkdown from "react-markdown";
import { FaBook } from "react-icons/fa";
import { useState } from "react";
import MermaidChart from "../Mermad/Mermad.jsx";
import Charts from "../Rechart/Rechart.jsx";
import { downloadpdf } from "../Service/api.js";
function FinalResult({result}){
    const [quickrevision,setquickrevision]=useState(false);
    return(
        <>
        <div className={Style.dataside}>
         <div className={Style.notes}>
            <div className={Style.nav}>
             <div className={Style.navleft}>
            <h1><FaBook /> Generated Notes</h1>
             </div>
             <div className={Style.navright}>
             <button onClick={()=>{setquickrevision(!quickrevision)}}  className={`${Style.revisionmode} ${quickrevision ? Style.active : ""}`}> {quickrevision ? "Exit Revision Mode" :"Quick Revision (5 min)"}</button>
             <button onClick={()=>{downloadpdf(result)}}>Download PDF</button>
             </div>
            </div>

            {
                !quickrevision && 
                <ReactMarkdown>
         {result?.notes}
                </ReactMarkdown>
            }
            {quickrevision && 
              <div className={Style.subtopics}>
                  <p>★ Sub Topics (Priority Wise)</p>
        
                  {result?.subTopics &&
                    Object.entries(result.subTopics).map(([star, topics]) => {
                      return (
                        <div key={star}>
                          <p>{star} priority</p>
        
                          {topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </div>
                      );
                    })}
                </div>
            }
           
            {quickrevision && (
        <>
        <h1>Points Wise</h1>
        {result?.revisionPoints?.map((points, i) => {
        return <li key={i}>{points}</li>;
        })}
        </>
        )}
        
        {result?.diagram?.data && (
  <MermaidChart chart={result.diagram.data} />
)}

{result?.charts && <Charts charts={result.charts} />}
        
        
        </div>
        
        </div>
        </>
    )
}

export default FinalResult