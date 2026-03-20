import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Our Online Food Delivery System is designed to make ordering food fast,
            simple, and convenient. It connects customers with their favorite restaurants
            through a smooth digital platform, ensuring secure payments, real-time tracking,
            and reliable service.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 8799975679</li>
            <li>dipakpatil200412@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Created by DIPAK Food Delivery System. All rights reserved.</p>
    </div>
  );
};

export default Footer;