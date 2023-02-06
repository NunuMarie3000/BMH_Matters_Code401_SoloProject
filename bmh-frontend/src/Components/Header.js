import React from 'react'
import logoLong from '../images/logoLong.png'

export default function Header() {
  return (
    <>
      <div style={{margin:'0vh 0vw 2vh 0vw', padding:'1vh 2vw', backgroundColor:'#1E7780' }}>
        <img className='headerImage' alt="logo" src={logoLong} />
      </div>
    </>
  )
}
