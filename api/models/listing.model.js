import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        address : {
            type : String, 
            required : true,
        },
        type :{
            type : String,
            required : true,
        },
        parking : {
            type : Boolean,
            required : true,
        },
        furnished : {
            type : Boolean,
            required : true,
        },  
        bedrooms :{
            type : Number,
            required : true,
        },
        Bathrooms :{
            type : Number,
            required: true,
        },
        offer :{
            type : Boolean,
            required : true,
        },
        regularPrice : {
            type : Number,
            required : true,
        },
        discountPrice : {
            type : Number
        },
        imageURLs : {
            type : Array
        },
        userRef :{
            type : String,
            required : true,
        },

    }, 
    {timestamps : true}
);

const Listing  = mongoose.model('Listing',listingSchema );

export default  Listing;