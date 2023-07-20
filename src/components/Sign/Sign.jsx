
import { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router";
import axios from "axios";


const Sign = () => {
  //ERROR STATE
  const [error, setError] = useState({
    email: false,
    password: false,
    cpassword: false,
  });

  //FORM DATA STATE
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const { lname, fname, email, password, cpassword } = formData;
// ONCHANGE FUNCTION FOR FORM VALIDATION
  function formValidation(e) {
    const { name, value } = e.target;
    //REGULAR EXPRESSION FOR EMAIL VALIDATION
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (name === "email") {
      if (value !== "" && !regex.test(value)) {
        setError((prev) => ({ ...prev, email: true }));
      } else {
        setError((prev) => ({ ...prev, email: false }));
      }
    }
    //REGULAR EXPRESSION FOR PASSWORD VALIDATION
    const passwordRegex = /[a-zA-Z]{6,}/;

    if (name === "password") {
      if (value !== "" && !passwordRegex.test(value)) {
        setError((prev) => ({ ...prev, password: true }));
      } else {
        setError((prev) => ({ ...prev, password: false }));
      }
    }
    if (name === "cpassword" && value !== password) {
      setError((prev) => ({ ...prev, cpassword: true }));
    } else {
      setError((prev) => ({ ...prev, cpassword: false }));
    }
    // SET FORM VALUES
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  let navigation = useNavigate();

  

  function handleSignUp() {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        cpassword: cpassword,
        last_name: lname,
        first_name: fname,
      }),
    };
    fetch("http://127.0.0.1:5000/Sign", opts)
      .then(function (response) {
        console.log(response);
        navigation("/Login");
      })
      .catch(function (error) {
        console.log(error.data);
      });
  }

// FORM DATA
  return (
    <div className="signUp-container">
      <div className="signUp">
        <h2>Sign Up</h2>
        <form method="POST" onChange={formValidation}>
          <input
            type="text"
            name="fname"
            placeholder="First name"
            value={fname}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            value={lname}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
          />
          {error.email && (
            <p className="error-message">Please enter a valid email</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
          />
          {/* ERROR message */}
          {error.password && (
            <p className="error-message">
              Password should be at least 6 characters
            </p>
          )}
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            value={cpassword}
          />
          {/* ERROR message */}
          {error.cpassword && (
            <p className="error-message">Passwords do not match</p>
          )}
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
          <p className="alternative">
            Have an account? <a href="./login">Login</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign;
