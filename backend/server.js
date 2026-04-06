import express from "express";
import cors from "cors"
import {connectDB} from './config/db.js'
import foodRouter from './routes/foodRouter.js';
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();
//app congig
const app = express();
const port= 3000;


//middleware
app.use(express.json())
app.use(cors())


//db connection

// connectDB();



//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
  res.send("server is running")
})

app.listen(port,()=>{
  console.log("app is running on port", port)
})