// import React from 'react'
import { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router";

// const [password, setPassword] = useState('');

const Sign = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { fname, lname, email, password, cpassword } = formData;

  // console.log(formData);

  const handleSignUpChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // const name = e.target.name
    // const value = e.target.value

    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData);
  // console.log(formData);

  const navigation = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform login logic here

    // console.log('email:', email);

    setFormData({
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
    });

    navigation("/Login");``
  };

  return (
    <div className="signUp-container">
      <div className="signUp">
        <h2>Sign Up</h2>
        <form method="POST">
          <input
            type="text"
            name="fname"
            placeholder="First name"
            value={fname.value}
            onChange={handleSignUpChange}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            value={lname.value}
            onChange={handleSignUpChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email.value}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            // pattern="\b[a-zA-Z0-9._%@-]{6,}\b"
            placeholder="Password"
            value={password.value}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            value={cpassword.value}
            onChange={handleSignUpChange}
          />
          <button type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
