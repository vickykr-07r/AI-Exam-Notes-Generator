import Naviagation from "../Navigation/Naviagation.jsx";
import Style from "../Home/Home.module.css"
function Home(){
    return(
        <>
        <div className={Style.container}>
        <Naviagation/>
        </div>
        </>
    )
}
export default Home;