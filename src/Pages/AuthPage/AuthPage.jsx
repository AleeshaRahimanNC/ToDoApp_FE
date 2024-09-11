import React, { useEffect, useState } from "react";
import "./AuthPage.css";
import LoginBox from "../../Components/AuthBox/LoginBox";
import RegisterBox from "../../Components/AuthBox/RegisterBox";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation(); // Use location to get the state
  const [boxType, setBoxType] = useState("login");

  // On component mount, check if the state is passed from AuthHome
  useEffect(() => {
    if (location.state?.boxType) {
      setBoxType(location.state.boxType); // Set boxType based on passed state
    }
  }, [location.state]);

  const handleSubmit = () => {
    if (boxType === "login") {
      // Handle login action
      navigate("/projectlistpage"); // Only navigate after successful login
    } else if (boxType === "register") {
      // Handle register action (for now, just prevent login navigation)
      console.log("Register action handled");
      // Perform registration logic here (such as validation or API call)
      // If registration is successful, navigate to the login or another page if needed
    }
  };

  const switchToRegisterBox = () => {
    setBoxType("register"); // Update the boxType state to "register"
  };

  const switchToLoginBox = () => {
    setBoxType("login"); // Update the boxType state to "login"
  };


  return (
    <div className="login_container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="user-icon">
          <div className="circle"></div> {/* Circle around the user icon */}
          <FontAwesomeIcon icon={faUser} />
        </div>

        <h3 className="auth_title">
          {boxType === "login" ? "Login" : "Register"}
        </h3>
        <div className="auth_box">
          {boxType === "login" ? <LoginBox /> : <RegisterBox />}

          <button className="auth_button" onClick={handleSubmit}>
            {boxType === "login" ? "Login" : "Register"}
          </button>

          {boxType === "login" ? (
            <p>
              New User?{" "}
              <span onClick={switchToRegisterBox}>
                Register Here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={switchToLoginBox}>
                Login Here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
          