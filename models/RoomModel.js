import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    noOfRooms: {
        type: Number,
        required: true
    }
    
},{timestamps: true});

export default new mongoose.model("room",roomSchema);