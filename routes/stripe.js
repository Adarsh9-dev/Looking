import express from "express";
import { createPayment } from "../controller/stripe.js";

const router = express.Router();

router.post('/', createPayment);

export default router;