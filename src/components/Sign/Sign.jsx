// import React from 'react'
import { useState, useEffect } from "react";
import "./sign.css";
import { useNavigate } from "react-router";
import httpClient from "../httpClient";

// const [password, setPassword] = useState('');

const Sign = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');


  // console.log(formData);
  // console.log(formData);

  let navigation = useNavigate();

  const handleSignUp = async() => {
    try{
      const resp = await httpClient.post('http://127.0.0.1:/5000/Sign', {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      cpassword: cpassword
    });
    navigation("/Login");
  } catch (error) {
    if (error.resp.status === 401) {
      alert("passwords do not match");
    } else if (error.resp.status === 409) {
      alert("user already exists");
    }
  }
  }
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
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            value={lname.value}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email.value}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            // pattern="\b[a-zA-Z0-9._%@-]{6,}\b"
            placeholder="Password"
            value={password.value}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            value={cpassword.value}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button type="submit" onClick={() => handleSignUp()}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
