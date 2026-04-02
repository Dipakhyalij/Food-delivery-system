import React, { useEffect } from 'react'
import './List.css'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const List = () => {
  const [list, setList] = useState([])
  const url= "http://localhost:3000"
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data)
    if (response.data.success) {
      setList(response.data.data)
    }else{
      toast.error(response.data.message)
    }
  }



  useEffect(() => {
    fetchList()
  }, [])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Actions</b>
        </div>
        {list.map((item, index) =>{
          return(
            <div className="list-table-format" key={index}>
              {/* src{`${url}/${item.image}`} */}
              <img src={`${url}/images/${item.image}`}  alt={item.name} className='list-image' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>X</p>
            </div>
          )
        }

          )
        }
      </div>
    </div>
  )
}

export default List