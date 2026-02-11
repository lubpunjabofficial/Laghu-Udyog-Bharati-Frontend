import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAll = () => {
    setMediaOpen(false);
    setMembershipOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <img src="/lubp.png" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <Link to="/" onClick={closeAll}>Home</Link>

          {/* Membership Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setMembershipOpen(true)}
            onMouseLeave={() => setMembershipOpen(false)}
          >
            <button className="dropdown-btn">Membership ▾</button>

            {membershipOpen && (
              <div className="dropdown-content">
                <Link to="/Membership" onClick={closeAll}>Membership Benefits</Link>
                <Link to="/Certificate" onClick={closeAll}>Certificate</Link>
                {/* <Link to="/admin" onClick={closeAll}>Members Login</Link> */}
              </div>
            )}
          </div>

          {/* Media Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setMediaOpen(true)}
            onMouseLeave={() => setMediaOpen(false)}
          >
            <button className="dropdown-btn">Media ▾</button>

            {mediaOpen && (
              <div className="dropdown-content">
                <Link to="/news" onClick={closeAll}>News</Link>
                 <Link to="/blog" onClick={closeAll}>Blog</Link>
                <Link to="https://lubindia.com/events/" onClick={closeAll}>Events</Link>
                <Link to="https://lubindia.com/press-release" onClick={closeAll}>Press Release</Link>
               
              </div>
            )}
          </div>

          <Link to="/gallery" onClick={closeAll}>Gallery</Link>
          <Link to="/about" onClick={closeAll}>About</Link>
          <Link to="/contact" onClick={closeAll}>Contact</Link>

          
        
        </div>

        {/* Mobile Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Home</Link>

          {/* Mobile Membership */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-btn"
              onClick={() => setMembershipOpen(!membershipOpen)}
            >
              Membership ▾
            </button>

            {membershipOpen && (
              <div className="mobile-dropdown-content">
                <Link to="/membership/benefits" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Benefits</Link>
              

              </div>
            )}
          </div>

          {/* Mobile Media */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-btn"
              onClick={() => setMediaOpen(!mediaOpen)}
            >
              Media ▾
            </button>

            {mediaOpen && (
              <div className="mobile-dropdown-content">
                <Link to="/news" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>News</Link>
                <Link to="/blog" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Blog</Link>
                <Link to="https://lubindia.com/events/" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Events</Link>
                <Link to="https://lubindia.com/press-release" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Press Release</Link>
                
              </div>
            )}
          </div>

          <Link to="/gallery" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Gallery</Link>
          <Link to="/about" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>About</Link>
          <Link to="/contact" onClick={() => { closeAll(); setMobileMenuOpen(false); }}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
