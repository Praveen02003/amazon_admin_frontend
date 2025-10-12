import React from "react";
import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className="admin-footer">
      <div className="footer-wrapper">
        <div className="footer-section footer-brand">
          <h2>Amazon Admin Panel</h2>
          <p>Powerful tools to manage products, orders, and users — all in one place.</p>
        </div>

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={()=>{navigate('/about')}}>About</li>
            <li onClick={()=>{navigate('/policies')}}>Policies</li>
            <li onClick={()=>{navigate('/contact')}}>Contact us</li>

          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Support</h3>
          <p>Email: <a href="mailto:support@amazonadmin.com">support@amazonadmin.com</a></p>
          <p>Helpline: +91 98765 43210</p>
          <div className="footer-socials">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amazon Admin Panel. All rights reserved.</p>
        <p>Developed by <span className="footer-dev">J Praveen</span></p>
      </div>
    </div>


  );
};
