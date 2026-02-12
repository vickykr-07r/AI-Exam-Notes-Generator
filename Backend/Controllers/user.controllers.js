import UserModel from "../Models/user.model.js";

export const getCurrentUser=async(req,res)=>{
    try {
        const id=req.userId;
        const user=await UserModel.findById(id)
        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }
        return res.status(200).json(user)
    } catch (error) {
         return res.status(404).json({
                message:`getcurrentuser error${error}`
            })
    }
}