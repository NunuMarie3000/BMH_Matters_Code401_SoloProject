import React from 'react'
// import { Navbar, Container } from 'react-bootstrap';
// import lilLogo from '../images/logo.png'

export default function ActualBurger({ handleShow }) {
  return (
    <>
      <div style={{ position: 'absolute' }} className='hamburger' onClick={handleShow}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      {/* <Navbar className='hamburgerNav'>
        <Container>
          <Navbar.Brand style={{display:'flex', alignItems:'center'}}>
            <img
              alt=""
              src={lilLogo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}
            <h1 style={{color:'white'}}>BMH Matters</h1>
          </Navbar.Brand>
        </Container>
      </Navbar> */}
    </>
  )
}
