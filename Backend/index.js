import express from "express";
const app=express();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true
  })
)

import cookieParser from "cookie-parser";
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

import dbconnects from "./DataBase/db.connect.js";

import { authRouter } from "./Routes/user.routes.js";
app.use("/api/auth",authRouter)

app.listen(process.env.PORT,(req,res)=>{
 console.log("the app is listening");
 dbconnects();
})