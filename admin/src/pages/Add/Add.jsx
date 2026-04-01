import React, { useState } from 'react'
import './Add.css'
import assets from '../../assets/assets'
const Add = () => {
  const [image, setImage] = useState(false)
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-img-upload flex-col">
  <p>Upload Image</p>

  <label htmlFor="image">
    <img src={assets.upload_area} alt="upload" />
  </label>

  <input 
    onChange={(e)=>setImage(e.target.files[0])} 
    type='file' 
    id='image' 
    hidden 
    required 
  />
</div>
              <div className="add-product-name">
        <p>Product Name</p>
        <input type="text" name='name' placeholder='Product Name' />
      </div>
      <div className="add-product-description flex-col">
        <p>Product Description</p>
        <textarea name='description' required rows="6" placeholder='Product Description' />
      </div>
      <div className="add-category-price">
        <div className="add-category flex-col">
          <p>Product Category</p>
          <select name="category" id="category">
            <option value="Rolls">Salad</option>
            <option value="clothing">Rolls</option>
            <option value="Desert">Desert</option>
            <option value="Sandwich">Sandwich</option>
            <option value="cake">Cake</option>
            <option value="Pasta">Pasta</option>
            <option value="Pizza">Pizza</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Nudles">Nudles</option>
            
          </select>
        </div>
        <div className="add-price flex-col">
          <p>Product Price</p>
          <input type="number" name='price' placeholder='Product Price' />
          </div>
      </div>
      <button type='submit' className='add-btn'>Add Product</button>
      </form>
    </div>
  ) 
}

export default Add