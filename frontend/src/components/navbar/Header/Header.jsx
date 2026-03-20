import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="hero" id="hero">
  {/* <img src={headerImage} alt="" /> */}

  <div className="hero-content">
    <h1>
      Order Your <br />
      Favourite Food <br />
      Here
    </h1>

    <p>
      Choose from a diverse menu crafted with premium ingredients
      and culinary expertise.
    </p>

    <button>View Menu</button>
  </div>
</div>

  )
}

export default Header