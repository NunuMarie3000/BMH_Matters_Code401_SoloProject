import React from 'react'
import logoLong from '../images/logoLong.png'

export default function Header() {
  return (
    <>
      <div style={{margin:'0vh 0vw 2vh 0vw'}}>
        <img style={{width:'100%', height:'25vh', display:'inline-block'}} alt="logo" src={logoLong} />
      </div>
    </>
  )
}
