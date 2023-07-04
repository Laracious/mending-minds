import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

let navigation = useNavigate();

const Login = (e) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  function handleLogin() {
    axios.post('http://127.0.0.1:5000/login', {
        email,
        password,
    })
    .then(function (response) {
      console.log(response);
      navigation("/");
    })
    .catch(function (error) {
      console.log(error.data);
      navigation("/Sign")
    });
  };
  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Login</h2>
        <form method="POST">
          <input
            type="email"
            name='email'
            pattern='\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b'
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
          <button type="button" onClick={handleLogin} >Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
