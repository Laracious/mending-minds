import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";

const token = localStorage.getItem("token");

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigation = useNavigate();
 
  // console.log(email);

  function handleLogin() {
    if (email === "omolara@gmail.com" && password === "omolara") {
      navigation("/Home");
      localStorage.setItem("Auth", "true");
    }
<<<<<<< HEAD


    // const opts = {
    //   method:"POST",
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email:email,
    //     password:password
    //   })
    // }
    // fetch('http://127.0.0.1:5000/login', opts)
    // .then(response => {
    //   if (response.status == 200){
    //     navigation("/");
    //     return response.json()
    //   } else alert("there was an error");
    // })
    // .then(data => {
    //   console.log("this came from backend"+ data.access_token);
    //   sessionStorage.setItem("token", data.access_token);

    // })

    // .catch(function (error) {
    //   console.log("there was an error", error);
    //   navigation("/Sign");
    // });
  }
=======
    fetch('http://127.0.0.1:5000/login', opts)
    .then(response => {
      if (response.status == 200){
        navigation("/");
        return response.json()
      } else alert("there was an error");
    })
    .then(data => {
      console.log("this came from backend"+ data.access_token);
      sessionStorage.setItem("token", data.access_token);
      
    })
  
    .catch(function (error) {
      console.log("there was an error", error);
      navigation("/Sign");
    });
    
};
>>>>>>> 1c204264821921cb6c666e317bc3b48ade0c45d6
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
          <button type="button" onClick={handleLogin(email, password)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
