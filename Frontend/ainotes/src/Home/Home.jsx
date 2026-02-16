import Naviagation from "../Navigation/Naviagation.jsx";
import Style from "../Home/Home.module.css"
import book from "../assets/books.avif"
import Feature from "../Feautre/Feature.jsx";
import { LiaGiftSolid } from "react-icons/lia";
import { BsFolderSymlinkFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <div className={Style.container}>
        <Naviagation/>
        <div className={Style.section}>

        <div className={Style.sectionleft}>
            <h1>Create Smart AI Notes in Seconds</h1>
         <p>Generate exam-focused notes, project documentation, flow diagrams and revision-ready content using AI-faster,cleaner and smarter</p>
         <button>Get Started</button>
        </div>

        <div className={Style.sectionright}>
            <img src={book} alt="" />
        </div>
        </div>

        <div className={Style.cards}>
        <Feature icon={<LiaGiftSolid />} title={"50 Free Credits"} des={"Start With 50 credits To Generate Notes Without Paying"}/>
         <Feature icon={<BsFolderSymlinkFill />} title={"Project Notes"} des={"Well-Structured Documentation For Assignment & Projects"}/>
          <Feature icon={<FaBookReader />} title={"Exam Notes"} des={"High-Yield revision-ready exam-oriented notes"}/>
           <Feature icon={<FaChartArea />} title={"Charts & graphs"} des={"Auto-generated diagrams charts and flow charts"}/>
            <Feature icon={<FaDownload />} title={"Free Pdf Download"} des={"Download clean printable PDF's instantly"}/>
        </div>

        <div className={Style.footer}>
         <div className={Style.foot}>
         
        <div className={Style.footerleft}>
         <h1>Exam Notes AI</h1>
         <p>Exam Notes AI helps students generate exam-focused notes, revision material, diagrams, and printable PDF's using AI</p>
        </div>

        <div className={Style.footermiddle}>
            <h1>Quick Links</h1>
            <ul>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/pricing">Add Credits</Link></li>
            </ul>
        </div>

        <div className={Style.footerright}>
            <h1>Support</h1>
            <p>vicky@gmail.com</p>
            <p>hello world</p>
        </div>

        </div>
        <hr />
        <footer> &nbsp; 2026 Exam notes AI. All rights reserved</footer>
        </div>
        
        </div>
        </>
    )
}
export default Home;