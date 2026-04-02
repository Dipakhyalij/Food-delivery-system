import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item 

const addFood = async (req,res)=>{
     let image_filename= `${req.file.filename}`;

     const food = new foodModel({
       name:req.body.name,
       description:req.body.description,
       price:req.body.price,
       category:req.body.category,
       image:image_filename
     })
     try{
      await food.save();
      res.json({success:true, message:"Food Addeed"})
     }catch(err){
      console.log(err)
      res.json({success:false, message:"ERROR"})
     }
}

//All Food List
const listFood= async (req,res)=>{
   try{
    const foods= await foodModel.find({});
    res.json({success:true, data:foods})
   }catch(err){
    console.log(err)
    res.json({success:false, message:"error"})
   }
}


//remove food item
const removeFood = async (req, res) => {
  try {
    const { id } = req.params

    console.log("Deleting ID:", id)

    const food = await foodModel.findById(id)

    if (!food) {
      return res.json({ success: false, message: "Food not found" })
    }

    // Delete image safely
    if (food.image) {
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) console.log("Image delete error:", err)
      })
    }

    await foodModel.findByIdAndDelete(id)

    res.json({ success: true, message: "Food removed" })

  } catch (err) {
    console.log(err)
    res.json({ success: false, message: "Error" })
  }
}


export {addFood, listFood, removeFood}