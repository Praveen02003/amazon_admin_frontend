import React from "react";
import "./Header.css";
import amazonlogo from "../Assets/amazon.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../Functions/Logout";

export const Header = () => {
  const navigate=useNavigate()
  return (
    <div className="header">
      <img src={amazonlogo} alt="logo" className="logo-image" />
      <h2 className="logo-text">Amazon</h2>
      <div className="nav-links">
        {localStorage.getItem('Admintoken') ? <h2 onClick={()=>{logout(navigate)}}>Logout</h2> : ''}
      </div>
    </div>
  );
};
