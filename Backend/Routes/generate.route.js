import express from "express";
import { isAuth } from "../Middlewares/isAuth.js";
import { generateNotes } from "../Controllers/generate.controllers.js";
export const notesRouter=express.Router();

notesRouter.post("/generatenotes",isAuth,generateNotes)