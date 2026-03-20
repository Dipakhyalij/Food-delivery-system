import React, { useState } from "react";
import './LoginPop.css';
import { assets } from '../../assets/assets';

const LoginPop = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-pop">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? null : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
          <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>I agree to the terms of use and privacy policy</p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPop;