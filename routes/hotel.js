import express from "express"
import {createHotel,updateHotel,deleteHotel,getOneHotel,getManyHotel, cityCounter, countType, featuredHotel,getLimitedHotel,getLimitedCityHotel, getPricedHotel} from "../controller/hotel.js";

const router = express.Router();

//Add 
router.post('/',createHotel);

//Delete 
router.delete('/:id',deleteHotel);

//Update
router.put('/:id',updateHotel);

//Get one Hotel
router.get('/oneHotel/:id',getOneHotel);

//Get all Hotel
router.get('/',getManyHotel);

//Count city
router.get('/ok/countCity',cityCounter);

//Count type
router.get('/count/countType',countType)

//Featured Hotel
router.get('/featured/featuredHotel',featuredHotel);

//Limited Hotel
router.get('/limit/limitedHotel',getLimitedHotel)

//Limited Hotel By City
router.get('/city/limitedCityHotel',getLimitedCityHotel);

//Limited Hotel by price and city
router.post('/price/pricedHotel',getPricedHotel);

export default router;