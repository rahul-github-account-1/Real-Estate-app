
import User from "../models/user.model.js"
import bcrypt from "bcrypt"


export const signup = async (req, res) =>{
    // console.log(req.body);

    const {username, email, password} =  req.body;

    const hashedPassword = bcrypt.hashSync(password, 15);
    const newUser = new User({
        username : username, 
        email : email, 
        password : hashedPassword
    })

    try {
        await newUser.save();
        res.status(201).send('new user created');
    } catch (error) {
        res.status(500).send(error.message);
    }
}