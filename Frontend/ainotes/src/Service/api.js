import axios from "axios";

 async function getcurrentuser(){
    try {
        let result=await axios.get(`http://localhost:8080/api/user/getcurrentuser`,{withCredentials:true})
        console.log(result.data)
    } catch (error) {
        console.log(error)
    }
}export default getcurrentuser