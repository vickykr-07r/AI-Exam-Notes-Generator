import express from "express"
import { isAuth } from "../Middlewares/isAuth.js";
import { createCreditsOrder } from "../Controllers/Credits.controllers.js";
export const creditRouter=express.Router();

creditRouter.post("/order",isAuth,createCreditsOrder)

