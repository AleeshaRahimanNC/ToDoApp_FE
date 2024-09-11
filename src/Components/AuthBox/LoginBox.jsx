import React, { useState } from "react";
import "./LoginBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";

function LoginBox() {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="common-user-box d-flex flex-column">
      <div className="common-user">
        <div className="user-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            required
          />
          <FontAwesomeIcon icon={faUser} className="password-toggle" />
        </div>

        <div className="user-box">
          <input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
            name="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEye : faEyeSlash} // Toggle icon based on state
            className="password-toggle"
            onClick={togglePasswordVisibility} // Click to toggle
          />
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
