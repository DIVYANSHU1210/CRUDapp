import React from 'react'
import "./index.css"

function CustumInput({placeholder, type, state, setState}) {
  return (
    <input 
    placeholder={placeholder} 
    type={type}
    value={state}
    onChange={(e)=>setState(e.target.value)}
    className='custom-input'
    />
  )
}

export default CustumInput;