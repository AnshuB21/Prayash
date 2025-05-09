import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";
import Footer from "./Footer";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-title">
          <img src="Logo.png" alt="Logo" className="logo" />
          <span className="site-title">Prayash Foundation Nepal</span>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <Link to="/login">
            <button className="admin-btn">Admin Login</button>
          </Link>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default NavBar;
