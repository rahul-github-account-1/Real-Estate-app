import Listing from "../models/listing.model.js";

export const createListing = async(req, res, next) =>{
    // console.log(req.body)
    try {
        const listing = await new Listing(req.body);

        // console.log(listing);
        res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}