import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import roomRoute from "./routes/room.js";
import userRoute from "./routes/user.js";
import hotelRoute from "./routes/hotel.js";
import sendSms from "./routes/sms.js";
import payment from "./routes/stripe.js";
import cors from "cors";


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.set('strictQuery', true);

mongoose.connect (process.env.MongoDB)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log("DB Disconnected"));


app.use('/authRoute',authRoute);
app.use('/roomRoute',roomRoute);
app.use('/hotelRoute',hotelRoute);
app.use('/userRoute',userRoute);
app.use('/send',sendSms);
app.use('/payment',payment);

app.use((err,req,res,next)=>{
    return res.status(500).json({"message": "Something went wrong"})
})

app.listen(process.env.Port,()=>{
    console.log("Server is responding");
})
