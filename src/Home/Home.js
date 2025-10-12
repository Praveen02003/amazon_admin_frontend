import React, { useContext, useEffect } from 'react';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';
import { gettotalproducts } from '../Functions/Gettotalproducts';
import { Mycontext } from '../App';
import { gettotalorders } from '../Functions/Gettotalorders';
import { gettotalcustomers } from '../Functions/Gettotalcustomers';
import { gettotalrevenue } from '../Functions/Gettotalrevenue';
import { restrictpage } from '../Functions/Restrictuser';

export const Home = () => {
  const {
    totalproducts,
    setTotalproducts,
    totalorders,
    setTotalorders,
    totalcustomers,
    setTotalcustomers,
    totalrevenue,
    setTotalrevenue
  } = useContext(Mycontext)
  const navigate = useNavigate()
  useEffect(() => {
    restrictpage(navigate)
    gettotalrevenue(setTotalrevenue)
    gettotalcustomers(setTotalcustomers)
    gettotalproducts(setTotalproducts)
    gettotalorders(setTotalorders)
  }, [])
  return (
    <div className="admin-home-container">
      <div className="admin-welcome-section">
        <h1>Welcome Back, Admin</h1>
        <p>Manage your Mini Amazon store efficiently — track products, add new items, and manage orders with ease.</p>
      </div>

      {/* ======= Dashboard Stats ======= */}
      <div className="admin-stats-container">
        <div className="admin-card">
          <h2>Total Products</h2>
          <p>{totalproducts}</p>
        </div>

        <div className="admin-card">
          <h2>Total Orders</h2>
          <p>{totalorders}</p>
        </div>

        <div className="admin-card">
          <h2>Total Customers</h2>
          <p>{totalcustomers}</p>
        </div>

        <div className="admin-card">
          <h2>Total Revenue</h2>
          <p>₹{totalrevenue}</p>
        </div>
      </div>

      {/* ======= Quick Actions ======= */}
      <div className="admin-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button onClick={() => { navigate('/showitems') }}>Show All Items</button>
          <button onClick={() => { navigate('/additems') }}>Add New Item</button>
          <button onClick={() => { navigate('/orders') }}>Show Orders</button>
        </div>
      </div>
    </div>



  );
};
