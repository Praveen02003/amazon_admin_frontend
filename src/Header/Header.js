import React from "react";
import "./Header.css";
import amazonlogo from "../Assets/amazon.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../Functions/Logout";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="admin-header">
      <div className="admin-header-left" onClick={()=>{navigate("/home")}}>
        <img src={amazonlogo} alt="Amazon Admin" className="admin-logo" />
        <h2 className="admin-title">Smartcart Admin Panel</h2>
      </div>


      {localStorage.getItem('Admintoken') && (
        <div className="admin-nav">
          <ul>
            <li onClick={() => { navigate('/home') }}>Dashboard</li>
            <li onClick={() => { navigate('/showitems') }}>Products</li>
            <li onClick={() => { navigate('/orders') }}>Orders</li>
          </ul>
        </div>
      )}


      <div className="admin-header-right">
        <div className="admin-profile">
          <i className="fa-solid fa-user-shield"></i>
          {localStorage.getItem('Admintoken') && (
            <span>Admin</span>
          )}
        </div>
        {localStorage.getItem('Admintoken') ? (
          <button onClick={() => logout(navigate)}>Logout</button>
        ) : (<button onClick={() => navigate('/')}>Login</button>) }
      </div>
    </div>


  );
};
