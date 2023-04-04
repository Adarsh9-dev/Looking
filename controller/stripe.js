import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();



const stripe = new Stripe(process.env.SK_KEY);
// console.log(process.env.SK_KEY);
export const createPayment = async (req,res,next)=> {
    const URL = "https://lookingcom.netlify.app";
    const product = req.body.all;
    let session;
    try {
        session = await stripe.checkout.sessions.create({
            line_items: [ 
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: product.name,
                        description: product.description,
                        images: [product.image,],
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.quantity,
            } ],
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: "https://lookingcom.netlify.app/success",
            cancel_url: "https://lookingcom.netlify.app/error",
        })
        res.status(200).json(session)
    } catch(err) {
        console.log(err);
        next();
    }
}