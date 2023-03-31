import express from "express";
import {sendSms} from "../controller/sms.js"

const router = express.Router();

//Send Message
router.post('/',sendSms)

export default router