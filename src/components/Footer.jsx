import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";
import Gallery from './../pages/Gallery';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* OUR OFFICE */}
        <div className="footer-section">
          <h3>OUR OFFICE</h3>
          <p><FaMapMarkerAlt className="icon" /> Plot no 1, Sector 8, Village Saidpura, Dera Bassi 140507</p>
          <p><FaPhoneAlt className="icon" /> 92161-25258 ,98140-61473</p>
          <p><FaEnvelope className="icon" /> pardeepmongia13@gmail.com , arvind.lub@gmail.com</p>

          <div className="social-icons">
            <a href="https://x.com/lub_punjab">< FaTwitter /></a>
            <a href="https://www.instagram.com/lubpunjabofficial"><FaInstagram /></a>
            <a href="https://www.youtube.com/@lubpunjabofficial"><FaYoutube /></a>
            <a href="https://linkedin.com/in/laghu-udyog-bharati-punjab-6ba219394"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/Certificate">Certificate</Link></li>
            <li><Link to="/Membership">Membership</Link></li>
            <li>
              <Link to="/login" >
                Admin Login
              </Link>
            </li>

          </ul>

        </div>

        {/* BUSINESS HOURS */}
        <div className="footer-section">
          <h3>LUB Punjab operates through several local chapters</h3>
          <li>1) Amritsar (including a dedicated Mahila/Women's Ikai)</li>
          <li>2) Jalandhar</li>
          <li>3) Batala</li>
          <li>4) Ludhiana</li>
          <li>5) Mohali</li>

        </div>



        {/* GALLERY */}
        <div className="footer-section">
          <h3>important links</h3>
          <ul>
            <li><Link to="https://lubindia.com" target="_blank" rel="noopener noreferrer">Laghu Udyog Bharati</Link></li>
            <li><Link to="https://msme.gov.in" target="_blank" rel="noopener noreferrer">MSME</Link></li>
            <li><Link to="https://eudyogaadhaar.org" target="_blank" rel="noopener noreferrer">Udyam Registration Portal</Link></li>
            <li><Link to="https://services.india.gov.in/?ln=en" target="_blank" rel="noopener noreferrer">NGS Portal</Link></li>
            <li><Link to="https://gem.gov.in" target="_blank" rel="noopener noreferrer">GeM</Link></li>
            <li><Link to="https://leap.lubindia.com" target="_blank" rel="noopener noreferrer">LEAP</Link></li>

          </ul>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Laghu Udyog Bharati Punjab, All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
