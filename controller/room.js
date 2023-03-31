import Room from "../models/RoomModel.js";
import Hotel from "../models/hotelModel.js";

//Create Room
export const addRoom = async (req,res,next)=> {
    const room = new Room (req.body);
    try {
        const saveRoom = await room.save();
        try {
            await Hotel.findByIdAndUpdate(req.params.id,{$push: {rooms: saveRoom._id}}); 
        } catch(err) {
            next(err);
        }
        res.status(200).json(saveRoom);
    } catch(err) {
        next(err);
    }
}

//Delete Room
export const deleteRoom = async (req,res,next) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(req.params.hotelId,{$pull: {rooms: req.params.id}})
        } catch (err) {
            next(err);
        }
        res.status(200).json({message: "Room deleted Successfully"})
    } catch (err) {
        next(err);
    }
}

//Update Room
export const updateRoom = async (req,res,next)=> {
    try {
        const uRoom = await Room.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(uRoom);
    } catch(err) {
        next(err);
    }
}

//Show Room
export const showRoom = async (req,res,next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch(err) {
        next(err);
    }
}

//Show All Rooms
