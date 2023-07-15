import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // imported icons from react-icons
import "./navbar.css";
import { NavLink } from "react-router-dom"; // import the 'NavLink' component from the React Router library.
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navRef = useRef();
  const token = localStorage.getItem("token") ? true : false;
  console.log(token);

  // ShowNavbar toggles the visibility of the navbar.c
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  let navigation = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("token");
    
    navigation("/Login");
  }
//logout handled from backend
  let name = localStorage.getItem("loggedin_user");
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
   name = capitalizeFirstLetter(name)

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
        {!token && (
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
        {token && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Booking"
            >
              Appointments
            </NavLink>
            <button className="logout" onClick={handleLogOut}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/Home"
              >
                Log out
              </NavLink>
            </button>
          <span className="greeting1">Hi, {name}</span>
            <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
