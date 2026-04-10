import React, { useContext, useState } from "react";
import './LoginPop.css';
import { assets } from '../../assets/assets';
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPop = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
  e.preventDefault();

  let newUrl = url;

  let payload;

  if (currentState === "Login") {
    newUrl += "/api/user/login";
    payload = {
      email: data.email,
      password: data.password
    };
  } else {
    newUrl += "/api/user/register";
    payload = data;
  }

  try {
    const response = await axios.post(newUrl, payload);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
    alert(error.response?.data?.message || "Something went wrong");
  }
};
  return (
    <div className="login-pop">
      <form onSubmit={onLogin} className="login-popup-container">  
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-input">
          {currentState !== "Login" && (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Your Name" required />
          )}

          <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />

          <button type="submit">
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>

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