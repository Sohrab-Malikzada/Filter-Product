import React, { useState } from 'react'
import "./Color.css"

const Color_Chose = () => {
const [isActive, setIsActive] = useState("")

  function changeColor(){
    setIsActive(!isActive)
    console.log(isActive)
  }
 
  return (
    <div className='box'>
      <div className='color-box'>
        <div className={ `${isActive? "color":"color-1"}`}>hi</div>
        <div className={`${isActive ? "color" : "color-2"}`}>hi</div>
        <div className={`${isActive ? "color" : "color-3"}`}>hi</div>
      </div>
      
      <button
      onClick={changeColor}
      >change color</button>

    </div>
  )
}

export default Color_Chose
