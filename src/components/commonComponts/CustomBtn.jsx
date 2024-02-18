import React from 'react'

function CustomBtn({text, onClick}) {
  return (
    <button 
    className='custom-btn'
    onClick={onClick}>{text}</button>
  )
}

export default CustomBtn