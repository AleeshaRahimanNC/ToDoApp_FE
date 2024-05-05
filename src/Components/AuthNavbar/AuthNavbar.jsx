import React from "react";
import "./AuthNavbar.css";


function AuthNavbar() {
  return (


    <nav class="navbar navbar-expand-lg  fixed-top navbar-scrolled">
      <div class="container-fluid nav-wrapper">
        <a class="navbar-brand" href="#">
          ToDoApp
        </a>
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Login
            </a>
            <a class="nav-link" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
   
  );
}

export default AuthNavbar;
