import React, { useState } from "react";
import "./LoginBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";

function LoginBox() {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // State to manage form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State for form validation
  const [errors, setErrors] = useState({});

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!username.trim()) {
      formErrors.username = "Username is required";
      isValid = false;
    }

    if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Submit handler for the login form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = { username, password };
      // Pass form data back to AuthPage's handleSubmit
      onsubmit(formData);
    }
  };

  return (
    <div className="common-user-box d-flex flex-column">
      <form onSubmit={handleFormSubmit}>
      <div className="common-user">
        <div className="user-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FontAwesomeIcon icon={faUser} className="password-toggle" />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="user-box">
          <input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
            name="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEye : faEyeSlash} // Toggle icon based on state
            className="password-toggle"
            onClick={togglePasswordVisibility} // Click to toggle
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
      </div>
      </form>
    </div>
  );
}

export default LoginBox;
