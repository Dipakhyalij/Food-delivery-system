import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// generate token
const createToken = (id)=>{
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"1d"});
}

// login user
const loginUser = async (req, res)=>{
    const { email, password } = req.body;

    try {
        // check user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // generate token
        const token = createToken(user._id);

        return res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}

// register user
const registerUser = async (req, res)=>{
    const {name, email, password} = req.body;

    try {
        // check if user exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.status(400).json({message:"User already exists"});
        }

        // validate email and password
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid email"});
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        return res.status(201).json({
            message:"User registered successfully",
            token
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({message:"Server error"});
    }
}

export { loginUser, registerUser };