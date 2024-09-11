import React from "react";
import "./AuthHome.css";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";
import Footer from "../../Components/Footer/Footer";
import authImg from "@assets/Auth-img.png";
import { useNavigate } from "react-router-dom";

function AuthHome() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/authpage", { state: { boxType: "login" } }); // Passing login state
  };

  const handleRegisterClick = () => {
    navigate("/authpage", { state: { boxType: "register" } }); // Passing register state
  };
  
  return (
    <>
      <div className="home-container">
        <AuthNavbar />
        <div className="register-login">
          <div className="title">
            <h1>
              Schedule Your Daily Task With
              <span className="todo-text">ToDo!</span>
            </h1>
          </div>

          <div className="button-container">
            <button className="register-button" onClick={handleRegisterClick}>Register</button>
            <button className="login-button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>

        <div className="auth-img">
          <img src={authImg} alt="" />
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default AuthHome;
