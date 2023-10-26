import Listing from "../models/listing.model.js";

export const createListing = async(req, res, next) =>{
    // console.log(req.body)
    try {
        const listing = new Listing(req.body);

        console.log(listing);

        await listing.save()
        res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}