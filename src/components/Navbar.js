import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/black.png";
import wlogo from "../assets/images/logo.jpg";
// const Navbar = () => {
//   const [show, setShow] = useState(false);

const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //   // fixed navbar
  const [scroll, setScroll] = useState(false);

  //   // fixed navbar

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <nav className={scroll ? "fixed-navbar" : ""}>
      {/* <nav className="navbar"> */}
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={scroll ? wlogo : logo} alt="Hewlett Packard Enterprise" />
          </Link>
          <button className="nav-btn" onClick={() => setNavbar(!navbar)}>
            <FiAlignJustify />
          </button>
        </div>
        <ul className="navul">
          {/* <div className={navbar ? "nav-links show-links" : "nav-links"}> */}
          <li>
            <Link
              to="/"
              className={scroll ? "nav-link" : "nav-linkactive"}
              activeClassName="active-link"
              onClick={() => setNavbar(false)}
            >
              home
            </Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleDropdown}
            onMouseLeave={handleDropdown}
          >
            <Link
              className={scroll ? "nav-link " : "nav-linkactive "}
              activeClassName="active-link"
              onClick={() => setNavbar(false)}
            >
              Service Portfolios
            </Link>
            <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <li>
                <Link to="/ivaas" className="dropdown-scroll">
                  IVaaS
                </Link>
              </li>
              <li>
                <Link to="/recipes/history/" className="dropdown-scroll">
                  Big Data
                </Link>
              </li>
              <li>
                <Link to="/recipes/history/" className="dropdown-scroll">
                  IoT
                </Link>
              </li>
              <li>
                <Link to="/recipes/history/" className="dropdown-scroll">
                  Computer Vision
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link
              to="/poc"
              className={scroll ? "nav-link" : "nav-linkactive"}
              activeClassName="active-link"
              onClick={() => setNavbar(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/poc"
              className={scroll ? "nav-link" : "nav-linkactive"}
              activeClassName="active-link"
              onClick={() => setNavbar(false)}
            >
              POCs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={scroll ? "nav-link" : "nav-linkactive"}
              activeClassName="active-link"
              onClick={() => setNavbar(false)}
            >
              Demos
            </Link>
          </li> */}
          {/* </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
