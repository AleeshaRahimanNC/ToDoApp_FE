import React from "react";
import "./AuthNavbar.css";
import ToDoIcon from "@assets/ToDo_icon.png";

function AuthNavbar() {
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
            <a className="nav-link" href="/authpage">
              Login
            </a>
            <a className="nav-link" href="/authpage">
              Register
            </a>
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
