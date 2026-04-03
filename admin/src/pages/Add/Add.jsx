  import React, { useState } from 'react'
  import './Add.css'
  import assets from '../../assets/assets'
  import axios from 'axios'
  import {toast} from 'react-toastify'
  const Add = ({url}) => {
    const [image, setImage] = useState(false)
    const[data, setData] = useState({
      name: '',
      description: '',
      price:"",
      category: 'Salad',
  })


  const onChangeHandler = (e) => {
  const name = e.target.name
  const value = e.target.value
  setData({...data, [name]: value})
  }


  const onSubmitHandler = async (e) => {  
    e.preventDefault()

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
  const res = await axios.post('http://localhost:3000/api/food/add', formData);
  if (res.status === 200) {
    setData({
      name: '',
      description: '',
      price:"",
      category: 'Salad',
    });
    setImage(false);
    toast.success(res.data.message);
  }
} catch (error) {
toast.error(error.response?.data?.message || 'An error occurred');    
}
  }
    return (
      <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
          <div className="add-img-upload flex-col">
    <p>Upload Image</p>

    <label htmlFor="image">
      <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" />
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
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Product Name' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' required rows="6" placeholder='Product Description' />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" id="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
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
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='Product Price' />
            </div>
        </div>
        <button type='submit' className='add-btn'>Add Product</button>
        </form>
      </div>
  
    ) 
  }
  export default Add