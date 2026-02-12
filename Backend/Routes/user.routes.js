import express from "express"
import { isAuth } from "../Middlewares/isAuth.js"
import { getCurrentUser } from "../Controllers/user.controllers.js"
export const userRouter=express.Router()

userRouter.get("/getcurrentuser",isAuth,getCurrentUser)