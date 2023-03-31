import express from "express"
import { addRoom, deleteRoom, showRoom, updateRoom } from "../controller/room.js";
const router = express.Router();

//add 
router.post('/:id',addRoom);
//delete 
router.delete('/:id/:hotelId',deleteRoom);
//update
router.put('/change/:id',updateRoom);
//show
router.get('/getRoom/:id',showRoom);


export default router;