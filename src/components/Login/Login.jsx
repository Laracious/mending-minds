import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";

const tokens = localStorage.getItem("token");

const Login = () => {
  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigation = useNavigate();
 


  function handleLogin() {
      const opts = {
         method:"POST",
         headers:{
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           email:email,
           password:password})
         }
       fetch('http://127.0.0.1:5000/login', opts)
       .then(response => {
        if (response.status == 200){
           navigation("/Home");
           return response.json()
         }else alert("there was an error");
       })
       .then(data => {
        localStorage.setItem("token", data.access_token);
        console.log("this came from backend "+ data.access_token);
      }).then(
        function name() {
          
          const opts = {
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tokens}`
            }
          }
          fetch('http://localhost:5000/@me', opts)
          .then(response => {
            if (response.status == 200){
              return response.json()
            } else alert("there was an error");
          })
          .then(names => {
            localStorage.setItem("loggedin_user", names.first_name);
            console.log("user"+ names.first_name);
            location.reload(false);
          })
          .catch(function (err) {
            console.log(err);
          })
        })
        .catch(function (error) {
          console.log("there was an error", error);
          navigation("/Sign");
        });
 
      };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 id="log">Login</h2>

        <form method="POST">
          <input
            type="email"
            name="email"
            pattern="\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() =>{
            handleLogin()
            }
            }>
            Login
          </button>
          <p className="alternative">
            Don't have an account? <a href="./sign">Sign up</a>{" "}
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
