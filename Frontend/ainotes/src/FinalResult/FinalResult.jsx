import Style from "../FinalResult/FinalResult.module.css"
import ReactMarkdown from "react-markdown";
function FinalResult({result}){
    return(
        <>
        <div className={Style.dataside}>
         <div className={Style.notes}>
        <ReactMarkdown>
         {result?.notes}
        </ReactMarkdown>
        </div>
        </div>
        </>
    )
}

export default FinalResult