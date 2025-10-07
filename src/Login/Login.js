import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { loginuser } from '../Functions/Logindata'
import { useNavigate } from 'react-router-dom'
import { Snackbar, Alert, Button } from "@mui/material";
import '../Login/Login.css'
export const Login = () => {
    const {
        loginmail,
        setLoginmail,
        loginpassword,
        setLoginpassword,
        open,
        setOpen,
        severity,
        setSeverity,
        loginmessage,
        setLoginmessage
    } = useContext(Mycontext)

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('Admintoken')) {
            navigate('/home')
        }
    }, [])

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <div>
                    <label>Mail :</label>
                    <input
                        type="email"
                        onChange={(event) => setLoginmail(event.target.value)}
                    />

                    <label>Password :</label>
                    <input
                        type="password"
                        onChange={(event) => setLoginpassword(event.target.value)}
                    />
                </div>
                <button onClick={() => loginuser(loginmail, loginpassword, navigate, setOpen, setSeverity, setLoginmessage)}>
                    Login
                </button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert severity={severity} onClose={() => setOpen(false)}>
                    {loginmessage}
                </Alert>
            </Snackbar>
        </div>


    )
}
