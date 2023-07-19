import React, { useState } from "react";
import Landing from "./components/Landing";
import Home from "./components/Landing";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Sign from "./components/Sign/Sign";
<<<<<<< HEAD
=======
import Therapist from "./components/Therapist/Therapist";

>>>>>>> b6ad2c905983b21badf9725f0cef9d696f523704
import Booking from "./components/Booking/Booking";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
// const [isAuthenticated, setIsAuthenticated ] = useState( false );

  let navigation = useNavigate();

  // function handleLogin(email, password) {
  //   if (email === "omolara@gmail.com" && password === "omolara") {
  //     navigation("/Home");
  //   }
// handleLogin = { handleLogin };
  // }

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" name="Landing" element={<Landing />} />
        <Route path="/Home" name="Home" element={<Home />} />
        <Route path="/About" name="About" element={<About />} />
        <Route path="/Blog" name="Blog" element={<Blog />} />
        <Route path="/Booking" name="Blog" element={<Booking />} />
<<<<<<< HEAD
        <Route path="/Login" name="Login" element={<Login />} />
=======
        <Route path="/Therapist" name="Therapist" element={<Therapist />} />
        <Route
          path="/Login"
          name="Login"
          element={<Login  />}
        />
>>>>>>> b6ad2c905983b21badf9725f0cef9d696f523704
        <Route path="/Sign" name="Sign" element={<Sign />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
