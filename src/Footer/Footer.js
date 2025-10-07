import React from "react";
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Amazon</div>
        <div className="footer-links">
          <a>About</a>
          <a>Contact</a>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
        <div className="footer-copy">
          © 2025 Amazon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
