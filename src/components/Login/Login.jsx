import { useState } from 'react';
import './login.css';
import httpClient from "../httpClient";
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    console.log(email, password);
    
    console.log(email, password);

    try{
      const resp = await httpClient.post("//localhost:5000/login", {
        email,
        password,
      });

      window.location.href = "/";
    } catch (e) {
      if (error.resp.status === 401) {
        alert("Invalid credentials");
      }
    }
  };
  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit"  >Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
