import express from "express";
import { createimage} from "../controllers/postControllers.js";
import {getimages,getImageById} from "../controllers/getControllers.js";
import { delimage } from "../controllers/delController.js";
const router=express.Router()
router.get("/allimages",getimages);
router.get("/photos/:id",getImageById);
router.post("/addimage",createimage);
router.delete("/delete/:id",delimage)
export default router;