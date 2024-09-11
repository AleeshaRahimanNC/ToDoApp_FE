import React, { useState } from "react";
import "./LoginBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function RegisterBox() {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Functions to toggle visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="common-user-box d-flex flex-column">
      <div className="common-user">
        <div className="user-box">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            required
          />
          <FontAwesomeIcon icon={faUser} className="password-toggle" />
        </div>

        <div className="user-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <FontAwesomeIcon icon={faEnvelope} className="password-toggle" />
        </div>

        <div className="user-box">
          {/* Toggle password input type based on visibility state */}
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input-field"
            required
          />
          {/* Toggle icon between faEyeSlash and faEye */}
          <FontAwesomeIcon
            icon={passwordVisible ? faEye : faEyeSlash}
            className="password-toggle"
            onClick={togglePasswordVisibility}
          />
        </div>

        <div className="user-box">
          {/* Toggle confirm password input type based on visibility state */}
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field"
            required
          />
          {/* Toggle icon between faEyeSlash and faEye */}
          <FontAwesomeIcon
            icon={confirmPasswordVisible ? faEye : faEyeSlash}
            className="password-toggle"
            onClick={toggleConfirmPasswordVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterBox;
