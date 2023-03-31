import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    // name,title,distance,price,address,description,photo,rating,type,rooms,fetured
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    rooms: {
        type: [String]
    },
    taxy: {
        type: String,
        required: true
    },
    cancelation: {
        type: Boolean,
        required: true,
    },
    fetured: {
        type: Boolean,
        default: false
    },
    about: {
        type: String,
        required: true
    }
})

export default new mongoose.model("hotelData",hotelSchema);



// {
//     "name": "Adarsh Hotel",
//     "type": "Hotel",
//     "address": "Nayapalir",
//     "distance": "600",
//     "title": "Nice Hotel ",
//     "price": 100,
//     "desc": "This is one of the most beautiful hotl in bhubaneswar",
//     "city": "Bhubaneswar"
// }