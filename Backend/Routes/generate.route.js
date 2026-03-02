import express from "express";
import { isAuth } from "../Middlewares/isAuth.js";
import { generateNotes } from "../Controllers/generate.controllers.js";
import { getMyNotes, getSingleNotes } from "../Controllers/notes.controllers.js";
export const notesRouter=express.Router();

notesRouter.post("/generatenotes",isAuth,generateNotes)
notesRouter.get("/getnotes",isAuth,getMyNotes)
notesRouter.get("/:id",isAuth,getSingleNotes)