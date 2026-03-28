    import React from 'react'
    import './Navbar.css'
    import assets from '../../assets/assets'

    const Navbar = () => {
    return (
       <div className="navbar">
  <img className="logo" src={assets.Alogo} alt="admin" />
  <img className="profile" src={assets.profile_img} alt="profile" />
</div>
    )
    }

    export default Navbar