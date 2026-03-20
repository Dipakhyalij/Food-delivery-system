import mongoose from "mongoose";

 export const connectDB = async()=>{
   await mongoose.connect("mongodb+srv://dipak:Dipak123@cluster0.ahhaize.mongodb.net/food-del").then(()=>{
    console.log("database is connected.....")
   })
}

connectDB();