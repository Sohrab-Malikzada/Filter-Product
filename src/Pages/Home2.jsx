import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
const Home2 = () => {
  const navigate = useNavigate ()
    const handleHome2 = () => {
      navigate ('/Home2')
    }
  return (
    <div>
      <div onClick={handleHome2}>Home2</div>
    </div>
  )
}

export default Home2
