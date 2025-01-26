import express from "express";
import { getPhoneNumbers, insertPhoneNumber, updatePhoneNumber, deletePhoneNumber } from "../controller/userController.js";

const router = express.Router();

router.get("/getPhoneNumbers",  getPhoneNumbers);
router.post("/insertPhoneNumber", insertPhoneNumber);
router.put("/updatePhoneNumber/:id", updatePhoneNumber);
router.delete("/deletePhoneNumber/:id", deletePhoneNumber);

export default router;
