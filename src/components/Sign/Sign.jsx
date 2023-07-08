// import React from 'react'
import { useState} from "react";
import "./sign.css";
import { useNavigate } from "react-router";
import axios from 'axios';
// const [password, setPassword] = useState('');

const Sign = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [utype, setUtype] = useState('');


  // console.log(formData);
  // console.log(formData);

  let navigation = useNavigate();

  function handleSignUp (){
    axios.post('http://127.0.0.1:5000/Sign', {
      email,
      fname,
      lname,
      password,
      cpassword
    })
    .then(function (response) {
      console.log(response);
      navigation("/Login");
    })
    .catch(function (error) {
      console.log(error.data);

    });
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
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          {/* <select name="utype">
            <option selected="selected" value="Genral user">General user</option>
            <option value="Concilor">Concelor</option>
        </select> */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            name="password"
            // pattern="\b[a-zA-Z0-9._%@-]{6,}\b"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
