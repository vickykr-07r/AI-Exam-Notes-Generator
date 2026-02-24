import express from "express"
export const pdfRouter=express.Router();
import { isAuth } from "../Middlewares/isAuth.js";
import { pdfDownload } from "../Controllers/pdf.controllers.js";
pdfRouter.post("/generatepdf",isAuth,pdfDownload)