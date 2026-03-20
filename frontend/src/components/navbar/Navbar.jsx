import React, { useState, useContext } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { StoreContext } from '../../context/StoreContext';


import { assets } from '../../assets/assets'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar' id="navbar" >
      <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link> 
       <ul className="navbar-menu">
               <li
  onClick={() => {
    setMenu("navbar");
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
  className={menu === "navbar" ? "active" : ""}
>
  Home
</li>
       
        <li
  onClick={() => {
    setMenu("Menu");
    document.getElementById("explore-menu")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
  className={menu === "Menu" ? "active" : ""}
>
  Menu
</li>

        
        <li
  onClick={() => {
    setMenu("About Us");
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
  className={menu === "About Us" ? "active" : ""}
>
  About us
</li>

       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}> </div>

        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign In</button>
       </div>
       </div>
  )
}
 
export default Navbar