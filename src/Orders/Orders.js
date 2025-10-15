import React, { useContext, useEffect } from "react";
import { Mycontext } from "../App";
import axios from "../Axios/Axios.js";
import { getorders } from "../Functions/Getorders.js";
import '../Orders/Orders.css'
import { useNavigate } from "react-router-dom";
import { restrictpage } from "../Functions/Restrictuser.js";
export const Orders = () => {
  const {
    getorderedemail,
    setGetorderedemail
  } = useContext(Mycontext);

  const navigate = useNavigate()

  useEffect(() => {
    restrictpage(navigate)
    getorders(setGetorderedemail);
  }, [])
  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      {getorderedemail.length > 0 ? getorderedemail.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-header">
            <h2 className="total">{order.email}</h2>
            <span className="total">Total: {order.total} rs</span>
          </div>

          <table className="order-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.products?.map((data, indexes) => (
                <tr key={indexes}>
                  <td>{data.title}</td>
                  <td>
                    <img src={data.image} alt={data.title} />
                  </td>
                  <td>{order.cartquantity[data.title]}</td>
                  <td>{data.price} rs</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )) : <p>No orders available</p>}
    </div>
  );
};
