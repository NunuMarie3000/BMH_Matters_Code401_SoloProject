import React from 'react'

export default function ActualBurger({ handleShow }) {
  return (
    <>
      <div style={{position:'absolute'}} className='hamburger' onClick={handleShow}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </>
  )
}
