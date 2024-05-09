import React, { useState } from "react";
import "./AuthPage.css";
import LoginBox from "../../Components/AuthBox/LoginBox";
import RegisterBox from "../../Components/AuthBox/RegisterBox";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AuthPage() {
  const navigate = useNavigate();
  const [boxType, setBoxType] = useState("login");

  const handleLoginBox = () => {
    navigate("/projectlistpage");
  };

  return (
    <div className="login_container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="user-icon">
          <div className="circle"></div> {/* Circle around the user icon */}
          <FontAwesomeIcon icon={faUser}/>
        </div>

        <h3 className="auth_title">
          {boxType === "login" ? "Login" : "Register"}
        </h3>
        <div className="auth_box">
          {boxType === "login" ? <LoginBox /> : <RegisterBox />}
          <button className="auth_button" onClick={handleLoginBox}>
            {boxType === "login" ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
