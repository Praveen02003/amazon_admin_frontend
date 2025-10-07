import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Notfound/Notfound.css'
export const Notfound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('Admintoken')) {
      navigate('/')
    }
  }, [])
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Page Not Found</p>
    </div>
  )
}
