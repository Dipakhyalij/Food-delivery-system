import React,{useContext} from 'react'
import './PlaceOrder.css' 
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="place-order">
    <div className="place-order-left">
      <p className="title">Delivery Information </p>
      <div className="multi-fields">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
      </div>
      <div className="multi-fields">
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Street"/>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="State"/>
      </div>
            <div className="multi-fields">
        <input type="text" placeholder="Zip Code"/>
        <input type="text" placeholder="Contry"/>
      </div>
      <input type="number" placeholder="Phone"/>
    </div>
    <div className="place-order-rigth">
      <div className="cart-total">
    <h2>Cart Totals</h2>
    <div>
      <div className="cart-total-details">
        <p>SubTotal</p>
        <p>₹{getTotalCartAmount()}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
        <p>Delevery Fee</p>
        <p>₹{getTotalCartAmount()===0?0:20}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
        <b>Total</b>
        <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
      </div>
    </div>
    <button>PROCESS TO PAYMENT</button>
    </div>
      </div> 
    </form>
  )
}

export default PlaceOrder