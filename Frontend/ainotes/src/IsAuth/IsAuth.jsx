import Feature from "../Feautre/Feature"
import Style from "../IsAuth/IsAuth.module.css"
import { LiaGiftSolid } from "react-icons/lia";
import { BsFolderSymlinkFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Utils/firebase.js";
import { useContext } from "react";
import { ServerContext } from "../Context/servercontext.jsx";
import axios from "axios"
function IsAuth(){
           let {serverURL}=useContext(ServerContext);
    async function handlegoogleauth(){
        try {
            let response=await signInWithPopup(auth,provider);
            const user = response.user;
            const name=user.displayName;
            const email=user.email

            let result=await axios.post(`${serverURL}/api/auth/google`,{name,email},{withCredentials:true})
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div className={Style.continer}>

        <div className={Style.nav}>
         <h1>AI EXAM NOTES GENERATOR</h1>
         <p>AI-powered exam-oriented notes & version</p>
        </div>
        
        <div className={Style.divide}>

        <div className={Style.left}>
        <div className={Style.heading}>
         <h1>Unlock Smart AI Notes</h1>
        </div>

        <div className={Style.button} onClick={handlegoogleauth}>
         <button><FaGoogle />Continue With Google</button>
        </div>

        <div className={Style.description}>
            <p>You get 50 Free Credits to create exam notes, Projects notes, Chart, Graphs and download clean free pdf's - Instantly using AI </p>
            <p>Start With Free 50 Credits. Upgrade anytime for more credits Instant Access</p>
        </div>
        </div>
        <div className={Style.right}>
        <Feature icon={<LiaGiftSolid />} title={"50 Free Credits"} des={"Start With 50 credits To Generate Notes Without Paying"}/>
         <Feature icon={<BsFolderSymlinkFill />} title={"Project Notes"} des={"Well-Structured Documentation For Assignment & Projects"}/>
          <Feature icon={<FaBookReader />} title={"Exam Notes"} des={"High-Yield revision-ready exam-oriented notes"}/>
           <Feature icon={<FaChartArea />} title={"Charts & graphs"} des={"Auto-generated diagrams charts and flow charts"}/>
            <Feature icon={<FaDownload />} title={"Free Pdf Download"} des={"Download clean printable PDF's instantly"}/>
        </div>

        </div>

        </div>
        </>
    )
}
export default IsAuth