import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Additems } from './Additems/Additems.js'
import { Showitems } from './Showitems/Showitems.js'
import { Orders } from './Orders/Orders.js'
import { Home } from './Home/Home.js';
import { Notfound } from './Notfound/Notfound.js';
import { Header } from './Header/Header.js';
import { Footer } from './Footer/Footer.js';
import { createContext, useState } from 'react';
import { Update } from './Update/Update.js';
import { Login } from './Login/Login.js';
export const Mycontext = createContext()
function App() {
  const[showallitems,setShowallitems]=useState([])
  const[getorderedemail,setGetorderedemail]=useState([])
  const[getorderedcartitems,setGetorderedcartitems]=useState([])
  const[count,setCount]=useState(0)
  const[updateid,setUpdateid]=useState("")
  const[updateimage,setUpdateimage]=useState("")
  const[updatetitle,setUpdatetitle]=useState("")
  const[updatediscription,setUpdatediscription]=useState("")
  const[updateprice,setUpdateprice]=useState(0)
  const[updatedefaultprice,setUpdatedefaultprice]=useState(0)
  const[updateoffer,setUpdateoffer]=useState(0)
  const[loginmail,setLoginmail]=useState("")
  const[loginpassword,setLoginpassword]=useState("")
  const[addimage,setAddimage]=useState("")
  const[addtitle,setAddtitle]=useState("")
  const[adddiscription,setAdddiscription]=useState("")
  const[addprice,setAddprice]=useState(0)
  const[adddefaultprice,setAdddefaultprice]=useState(0)
  const[addoffer,setAddeoffer]=useState(0)
  const[categories,setCategories]=useState("")
  const[open,setOpen]=useState(false)
  const[severity,setSeverity]=useState("")
  const[loginmessage,setLoginmessage]=useState("")
  const[addmessage,setAddmessage]=useState("")
  const[updatemessage,setUpdatemessage]=useState("")
  const[deletemessage,setDeletemessage]=useState("")
  return (
    <Mycontext.Provider value={{
      showallitems,
      setShowallitems,
      getorderedemail,
      setGetorderedemail,
      getorderedcartitems,
      setGetorderedcartitems,
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
      loginmail,
      setLoginmail,
      loginpassword,
      setLoginpassword,
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
      loginmessage,
      setLoginmessage,
      addmessage,
      setAddmessage,
      updatemessage,
      setUpdatemessage,
      deletemessage,
      setDeletemessage
    }}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notfound' element={<Notfound />} />
          <Route path='/additems' element={<Additems />} />
          <Route path='/showitems' element={<Showitems />} />
          <Route path='/update' element={<Update />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Footer />
      </Router>
    </Mycontext.Provider>
  );
}

export default App;
