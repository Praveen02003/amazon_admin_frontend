import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import { fetchallitems } from '../Functions/Fetchallitems.js'
import '../Showitems/Showitems.css'
import { deletedata } from '../Functions/Deletedata.js'
import { useNavigate } from 'react-router-dom'
import { updatestatedata } from '../Functions/Updatestate.js'
import { Snackbar, Alert, Button } from "@mui/material";
export const Showitems = () => {
  const {
    showallitems,
    setShowallitems,
    count,
    setCount,
    updateimage,
    setUpdateimage,
    updatetitle,
    setUpdatetitle,
    updatediscription,
    setUpdatediscription,
    updateprice,
    setUpdateprice,
    updatedefaultprice,
    setUpdatedefaultprice,
    updateoffer,
    setUpdateoffer,
    updateid,
    setUpdateid,
    open,
    setOpen,
    severity,
    setSeverity,
    updatemessage,
    setUpdatemessage,
    deletemessage,
    setDeletemessage
  } = useContext(Mycontext)

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('Admintoken')) {
      navigate('/')
    }
    else {
      fetchallitems(setShowallitems)
    }
  }, [count])

  return (
    <div className="showitems-container">
      <table className="showitems-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Offer</th>
            <th>Default Price</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {showallitems.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image} alt={item.title} /></td>
              <td>{item.title}</td>
              <td className="description">{item.description}</td>
              <td>{item.offer}% Off</td>
              <td>{item.defaultprice}rs</td>
              <td>{item.price}rs</td>
              <td><button onClick={() => { deletedata(item, count, setCount,setOpen,setDeletemessage,setSeverity) }}>Delete</button> <button onClick={() => { updatestatedata(item, navigate, count, setCount, updateimage, setUpdateimage, updatetitle, setUpdatetitle, updatediscription, setUpdatediscription, updateprice, setUpdateprice, updatedefaultprice, setUpdatedefaultprice, updateoffer, setUpdateoffer, updateid, setUpdateid) }}>Update</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={severity} onClose={() => setOpen(false)}>
          {deletemessage}
        </Alert>
      </Snackbar>
    </div>

  )
}
