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
      <h1 className="additems-title">Add Items</h1>

      <div className="additems-form">
        <label>
          Image :
          <input
            type="file"
            onChange={(event) => handleaddimagefile(event, setAddimage)}
          />
        </label>

        {addimage && (
          <img
            src={addimage}
            alt="Preview"
            className="additems-preview"
          />
        )}

        <label>
          Title :
          <input
            type="text"
            placeholder="Enter item title"
            onChange={(event) => setAddtitle(event.target.value)}
          />
        </label>

        <label>
          Description :
          <textarea
            rows="4"
            placeholder="Enter item description"
            onChange={(event) => setAdddiscription(event.target.value)}
          />
        </label>

        <label>
          Price :
          <input
            type="number"
            placeholder="Enter item price"
            onChange={(event) => setAddprice(event.target.value)}
          />
        </label>

        <label>
          Offer :
          <input
            type="number"
            placeholder="Enter discount/offer %"
            onChange={(event) => setAddeoffer(event.target.value)}
          />
        </label>

        <label className="category-label">
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



        <button className="additems-button" onClick={() => { additemsdata(setOpen, setSeverity, setAddmessage, categories, addimage, addtitle, adddiscription, addprice, addoffer) }}>Add</button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
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
