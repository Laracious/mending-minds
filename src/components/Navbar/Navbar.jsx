import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // imported icons from react-icons
import "./navbar.css";
import { NavLink } from "react-router-dom"; // import the 'NavLink' component from the React Router library.

function Navbar() {
  const navRef = useRef();

  const auth = localStorage.getItem("Auth") ? true : false;

  // ShowNavbar toggles the visibility of the navbar.c
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

<<<<<<< HEAD
const handleClick = () => {
    showNavbar(false);
  };

=======
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
  const handleLogOut = () => {
    localStorage.removeItem("Auth");
  };

  const name = "Omolara";
  return (
    <header>
      <h1>Mending Minds</h1>
      <nav ref={navRef}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
          to="/Home" onClick={handleClick}
=======
          to="/Home"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
          to="/About"  onClick={handleClick}
=======
          to="/About"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
          to="/Blog"  onClick={handleClick}
=======
          to="/Blog"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
        >
          Blog
        </NavLink>
        {!auth && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
              to="/Login"  onClick={handleClick}
=======
              to="/Login"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
            >
              Login
            </NavLink>
            <button className="sign-up">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
                to="/Sign" onClick={handleClick}
=======
                to="/Sign"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
              >
                Sign up
              </NavLink>
            </button>
          </>
        )}
        {/* display when it's Authenticated (logged in) */}
        {auth && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
              to="/Booking" onClick={handleClick}
=======
              to="/Booking"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
            >
              Appointment
            </NavLink>
            <button className="logout" onClick={handleLogOut}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
<<<<<<< HEAD
                to="/Home" onClick={handleClick}
=======
                to="/Home"
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
              >
                Log out
              </NavLink>
            </button>
          </>
        )}
<<<<<<< HEAD
       {auth && <span className="greeting">Hi, {name}</span>}
=======
        <span className="greeting">Hi, {name}</span>
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
<<<<<<< HEAD
      { auth && <span className="greeting1">Hi, {name}</span>}
=======
      <span className="greeting1">Hi, {name}</span>
>>>>>>> bee77cc85ee2927a0279b97a6f5cf43efc726245
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
