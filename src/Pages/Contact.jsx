import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate ()
    const handleContact = () => {
      navigate ('/Contact')
    }
  return (
    <div onClick={handleContact}>
      <div>
      Contact
      </div>
    </div>
  )
}

export default Contact
