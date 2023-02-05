import React from 'react'
import { Button } from 'react-bootstrap';

export default function Logout() {
  const handleLogout =() =>{
    window.open('/', '_self');
  }
  return (
    <>
      <Button style={{borderRadius:'30%', margin:'0', padding:'0 5px'}} variant='danger' onClick={handleLogout}>Logout</Button>
    </>
  )
}
