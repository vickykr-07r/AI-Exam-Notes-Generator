import express from "express";
export let authRouter=express.Router();
import { googleAuth, logout } from "../Controllers/IsAuth.controllers.js";

authRouter.post("/google",googleAuth);
authRouter.post("/logout",logout);
