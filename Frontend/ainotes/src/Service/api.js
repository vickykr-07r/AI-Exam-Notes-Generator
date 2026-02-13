import axios from "axios";
import { setuserData } from "../Redux/userslice";

 async function getcurrentuser(dispatch){
    try {
        let result=await axios.get(`http://localhost:8080/api/user/getcurrentuser`,{withCredentials:true})
        dispatch(setuserData(result.data))
    } catch (error) {
        console.log(error)
    }
}export default getcurrentuser