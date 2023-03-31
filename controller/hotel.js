import Hotel from "../models/hotelModel.js";

//Create
export const createHotel = async (req,res,next)=> {
    const hotelData = new Hotel(req.body);
    try {
        const hotel = await hotelData.save();
        res.status(200).json(hotel);
    } catch(err) {
        next(err);
    }
}
//Update
export const updateHotel = async (req,res,next)=> {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(updateHotel);
    }
    catch(err) {
        next(err);
    }
}
//Delete
export const deleteHotel = async (req,res,next)=> {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Successfully");
    }
    catch(err) {
        next(err);
    }
}

//Get
export const getOneHotel = async (req,res,next)=> {
    try {
        const hotels = await Hotel.findById(req.params.id);
        res.status(200).json(hotels);
    } catch(err) {
        next(err);
    }
}
//GetAll
export const getManyHotel = async (req,res,next)=> {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }
    catch(err) {
        next(err);
    }
}
//count city
export const cityCounter = async (req,res,next) => {
    try {
        const cities = req.query.cities.split(",");
        const findCity = await Promise.all(cities.map((city)=> {
            return Hotel.find({city: city}).count()
        }));
        res.status(200).json(findCity)
    } catch(err) {
        next(err);
    }
}
//Count type of hotel
export const countType = async(req,res,next) => {
    const types = req.query.types.split(",");
    try {
        const hotel = await Promise.all(types.map((t)=> {
            return Hotel.find({type: t}).count();
        }));
        // console.log(types);
        res.status(200).json(hotel);
    } catch(err) {
        next(err);
    }
}
//count featured hotel
export const featuredHotel = async(req,res,next) => {
    try {
        const feature = await Hotel.find({fetured: true}).limit(req.query.Limit);
        res.status(200).json(feature);
    } catch(err) {
        next(err);
    }
}

//get Limited Hotel
export const getLimitedHotel = async (req,res,next)=> {
    const limitValue = req.query.limit;
    try {
        const hotels = await Hotel.find().limit(limitValue);
        res.status(200).json(hotels);
    }
    catch(err) {
        next(err);
    }
}

//get Limited Hotel by city
export const getLimitedCityHotel = async (req,res,next) => {
    const city= req.query.city;
    const limit= req.query.limit;
    try {
        const findHotel = await Hotel.find({city: city}).limit(limit);
        res.status(200).json(findHotel)
    } catch (err) {
        next(err);
    }
}

//get Limited Hotel by price and city
export const getPricedHotel = async (req,res,next) => {
    const limit = req.query.limit;
    const {city,maxPrice,minPrice} = req.body;
    try {
        const hotels = await Hotel.find({price: {$gte: minPrice,$lte: maxPrice}, city: city}).limit(limit);
        res.status(200).json(hotels);
    } catch(err) {
        next(err);
    }
}