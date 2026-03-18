import UserModel from "../Models/user.model.js";
import jwt from "jsonwebtoken"

export const googleAuth=async(req,res)=>{
try {
    let {name,email}=req.body;
    let user=await UserModel.findOne({email});
    if(!user){
         user=await UserModel.create({
        name,email
    })
    }

    const token=jwt.sign({id:user._id},
        process.env.SECRET_KEY,
        {expiresIn:"7d"}
    )

    res.cookie("token",token,{
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
    message: "google auth successfully",
    user
    });

} catch (error) {
    return res.status(500).json({
    message:`google auth error ${error}`
    })
}
}

export const logout=async(req,res)=>{
try {
    await  res.clearCookie("token");
    return res.status(200).json({
        message:"logout successfully"
    })
} catch (error) {
    return res.status(500).json({
        message:`logout error ${error.message}`
    })
}
}