import React from "react";
import "./AuthNavbar.css";
import ToDoIcon from "@assets/ToDo_icon.png";
import { useNavigate } from "react-router-dom";

function AuthNavbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/authpage", { state: { boxType: "login" } });
  };

  const handleRegisterClick = () => {
    navigate("/authpage", { state: { boxType: "register" } });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong fixed-top">
      {/* <nav class="navbar navbar-expand-lg  fixed-top navbar-scrolled"> */}
      <div class="container-fluid nav-wrapper">
        <div className="brand-icon">
          <img className="navbar-icon" src={ToDoIcon} alt="" />
          <a class="navbar-brand" href="#">
            ToDo
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
            <button className="nav-link btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="nav-link btn" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default AuthNavbar;
