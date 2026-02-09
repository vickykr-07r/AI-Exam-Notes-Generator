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

import dbconnects from "./DataBase/db.connect.js";

app.listen(process.env.PORT,(req,res)=>{
 console.log("the app is listening");
 dbconnects();
})