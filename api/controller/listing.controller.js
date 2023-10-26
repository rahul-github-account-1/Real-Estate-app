import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

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

export const deleteListing = async(req, res, next)=>
{
    const listing = await Listing.findById(req.params.id);
    console.log(listing);

    if(!listing ){
        next(errorHandler(404, 'Listing not found.'));
        return;
   }

   try {
        if(req.user.id !== listing.userRef){
            next(errorHandler(401, 'You can delete only your listing.'));
            return;
        }

        const deletedListing = await Listing.findByIdAndDelete(req.params.id);

        console.log(deletedListing);
        
        res.status(200).json({message : 'Listing deleted successfully.'});
        
    } catch (error) {
        next(error);   
    }

}

export const updateListing = async (req, res, next) =>{
    const listing = await Listing.findById(req.params.id);

    if(!listing ){
        next(errorHandler(404, 'Listing not found.'));
        return;
   }
   if(req.user.id !== listing.userRef){
    next(errorHandler(401, 'You can update only your listing.'));
    return;
    }


   try {

    const updatedListing = await Listing.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true }
        );
        res.status(200).json(updatedListing);

   } catch (error) {
        next(error);
   }
}