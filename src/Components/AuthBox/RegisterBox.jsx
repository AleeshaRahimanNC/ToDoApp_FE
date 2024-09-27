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

  // State to manage form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for form validation
  const [errors, setErrors] = useState({});

  // Functions to toggle visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    // Basic email regex validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      formErrors.email = "Invalid email format";
      isValid = false;
    }

    if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Submit handler for the register form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        name,
        email,
        password,
      };
      // Call the onSubmit prop to pass data back to AuthPage
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
            name="name"
            placeholder="Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FontAwesomeIcon icon={faUser} className="password-toggle" />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="user-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FontAwesomeIcon icon={faEnvelope} className="password-toggle" />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="user-box">
          {/* Toggle password input type based on visibility state */}
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Toggle icon between faEyeSlash and faEye */}
          <FontAwesomeIcon
            icon={passwordVisible ? faEye : faEyeSlash}
            className="password-toggle"
            onClick={togglePasswordVisibility}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="user-box">
          {/* Toggle confirm password input type based on visibility state */}
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {/* Toggle icon between faEyeSlash and faEye */}
          <FontAwesomeIcon
            icon={confirmPasswordVisible ? faEye : faEyeSlash}
            className="password-toggle"
            onClick={toggleConfirmPasswordVisibility}
          />
          {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>
      </div>
      </form>
    </div>
  );
}

export default RegisterBox;
