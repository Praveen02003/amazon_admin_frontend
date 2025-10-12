import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { handleaddimagefile } from '../Functions/Handleaddimagefile'
import '../Additems/Additems.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Axios/Axios.js'
import { Snackbar, Alert, Button } from "@mui/material";
import { additemsdata } from '../Functions/Additemdata.js'
export const Additems = () => {
  const {
    addimage,
    setAddimage,
    addtitle,
    setAddtitle,
    adddiscription,
    setAdddiscription,
    addprice,
    setAddprice,
    adddefaultprice,
    setAdddefaultprice,
    addoffer,
    setAddeoffer,
    categories,
    setCategories,
    open,
    setOpen,
    severity,
    setSeverity,
    addmessage,
    setAddmessage
  } = useContext(Mycontext)

  const navigate = useNavigate()



  useEffect(() => {
    if (!localStorage.getItem('Admintoken')) {
      navigate('/')
    }

  }, [])

  return (
    <div className="additems-container">
      <h1 className="additems-title">Add New Product</h1>

      <div className="additems-content">
        {/* Left Column: Image Upload */}
        <div className="additems-image-section">
          <label className="additems-label">
            Product Image:
            <input
              type="file"
              onChange={(event) => handleaddimagefile(event, setAddimage)}
              className="additems-input"
            />
          </label>

          {addimage && (
            <img
              src={addimage}
              alt="Preview"
              className="additems-preview"
            />
          )}
        </div>

        {/* Right Column: Form Inputs */}
        <div className="additems-form">
          <label className="additems-label">
            Title:
            <input
              type="text"
              placeholder="Enter item title"
              onChange={(event) => setAddtitle(event.target.value)}
              className="additems-input"
            />
          </label>

          <label className="additems-label">
            Description:
            <textarea
              rows="4"
              placeholder="Enter item description"
              onChange={(event) => setAdddiscription(event.target.value)}
              className="additems-input additems-textarea"
            />
          </label>

          <label className="additems-label">
            Price:
            <input
              type="number"
              placeholder="Enter item price"
              onChange={(event) => setAddprice(event.target.value)}
              className="additems-input"
            />
          </label>

          <label className="additems-label">
            Offer (%):
            <input
              type="number"
              placeholder="Enter discount/offer %"
              onChange={(event) => setAddeoffer(event.target.value)}
              className="additems-input"
            />
          </label>

          <label className="additems-label">
            Category:
            <select
              className="category-select"
              onChange={(event) => setCategories(event.target.value)}
            >
              <option value="">Select Option</option>
              <option value="laptops">Laptops</option>
              <option value="chargers">Chargers</option>
              <option value="earpods">Earpods</option>
              <option value="hometheatres">Home Theatres</option>
              <option value="keyboards">Keyboards</option>
              <option value="mobiles">Mobiles</option>
              <option value="mouses">Mouses</option>
              <option value="tvs">TVs</option>
            </select>
          </label>

          <button
            className="additems-button"
            onClick={() => additemsdata(setOpen, setSeverity, setAddmessage, categories, addimage, addtitle, adddiscription, addprice, addoffer)}
          >
            Add Product
          </button>
        </div>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} onClose={() => setOpen(false)}>
          {addmessage}
        </Alert>
      </Snackbar>
    </div>

  )
}
