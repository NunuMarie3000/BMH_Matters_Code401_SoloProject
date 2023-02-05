import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import Logout from './Auth/Logout';
import ActualBurger from './ActualBurger';
import Profile from './Profile';

export default function Hamburger({ userData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }
  return (
    <>
      <ActualBurger handleShow={handleShow} />

      <Offcanvas style={{ width: '75%', height: '75%', marginTop: '6vh', borderTopLeftRadius:'8%', borderBottomLeftRadius:'8%' }} backdropClassName='static' placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{display:'flex', justifyContent:'space-between'}}>
            <i>Signed in as: {userData.firstName} {userData.lastName}</i>
            <Logout />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Profile userData={userData} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
