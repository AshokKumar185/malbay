import React, { useState } from "react";
import { Link, NavLink, RedirectFunction } from "react-router-dom";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import "./navbar.css"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>MalBay Express</span>


          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/locations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LOCATIONS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/fleets"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FLEETS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/pricing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                PRICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CONTACT
              </NavLink>
            </li>
            <li >
              <Link to='/destination'>    <button onClick={handleClick} className="booknowbtn">BOOK NOW</button></Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;