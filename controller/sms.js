import dotenv from "dotenv";
dotenv.config();
import Twilio from "twilio";
const sid = process.env.Sid;
const token = process.env.Token;

const client = new Twilio(sid,token);

export const sendSms = async (req,res,next)=> {
    const {phone,hotel,price,night,room} = req.body;
    try {
        client.messages
            .create({
                from: "+14248357795",
                to: phone,
                body: `Thank you for booking ${room} room in the hotel ${hotel} for ${night} night through Looking.com `
            })
            .then((data)=>res.status(200).json(data))
            .catch((err)=>res.status(500).json(err))
    } catch(err) {
        next(err);
    }
}
