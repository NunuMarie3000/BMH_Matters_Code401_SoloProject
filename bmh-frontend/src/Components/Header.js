import React from 'react'
import logoLong from '../images/logoLong.png'

export default function Header() {
  return (
    <>
      <div className='headerDiv'>
        <img className='headerImage' alt="logo" src={logoLong} />
      </div>
    </>
  )
}
