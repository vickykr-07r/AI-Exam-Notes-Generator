import Style from "../Sidebar/Sidebar.module.css"
import { TiPin } from "react-icons/ti";
function Sidebar({result}){
    return(
        <>
        <div className={Style.sidebar}>

         <div className={Style.heading}>
         <span><TiPin /></span>
         <h3>Quick Exam View</h3>
         </div>
         
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

        <div className={Style.importance}>
          <h2>🔥 Exam Importance</h2>
          <h4>{result.importance}</h4>
           <h3>❓ Important Questions</h3>
          
          <div className={Style.shortquestion}>
            <h5>Short Questions</h5>
          {
            result?.questions?.short?.map((short ,i)=>{
            return <li key={i}>{short}</li>
            })
          }
          </div>
           <div className={Style.longquestion}>
            <h5>Long Questions</h5>
          {
            result?.questions?.long?.map((long ,i)=>{
            return <li key={i}>{long}</li>
            })
          }
          </div>
        </div>

        </div>
        </>
    )
}

export default Sidebar