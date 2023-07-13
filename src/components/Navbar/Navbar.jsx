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
          to="/Home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/Blog"
        >
          Blog
        </NavLink>
        {!auth && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Login"
            >
              Login
            </NavLink>
            <button className="sign-up">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/Sign"
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
              to="/Booking"
            >
              Appointment
            </NavLink>
            <button className="logout" onClick={handleLogOut}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/Home"
              >
                Log out
              </NavLink>
            </button>
          </>
        )}
        <span className="greeting">Hi, {name}</span>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <span className="greeting1">Hi, {name}</span>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
