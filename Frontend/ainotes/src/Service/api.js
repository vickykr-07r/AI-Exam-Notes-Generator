import axios from "axios";
import { setuserData } from "../Redux/userslice";

 async function getcurrentuser(dispatch){
    try {
        let result=await axios.get(`http://localhost:8080/api/user/getcurrentuser`,{withCredentials:true})
        dispatch(setuserData(result.data))
    } catch (error) {
        console.log(error)
    }
}

export const downloadpdf=async(result)=>{
try {
    const response=await axios.post("http://localhost:8080/api/pdf/generatepdf",{result},{withCredentials:true,responseType:"blob"})
    const blob=new Blob([response.data],{
     type:"application/pdf"
    })

    const url=window.URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.href=url;
    link.download="ExamNotesAI.pdf"
    link.click();
    window.URL.revokeObjectURL(url);
} catch (error) {
    console.log(error)
}
}
export default getcurrentuser