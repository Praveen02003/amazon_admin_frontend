import React, { useEffect } from 'react';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    if (!localStorage.getItem('Admintoken'))
    {
      navigate('/')
    }
},[])
  return (
    <div className="home-container">
      <div className="cards-container">
        <div className="card" onClick={()=>{navigate('/additems')}}>
          <h2>Add Items</h2>
        </div>
        <div className="card" onClick={()=>{navigate('/showitems')}}>
          <h2>Show All Items</h2>
        </div>
        <div className="card" onClick={()=>{navigate('/orders')}}>
          <h2>Orders</h2>
        </div>
      </div>
    </div>
  );
};
