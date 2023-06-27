import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
