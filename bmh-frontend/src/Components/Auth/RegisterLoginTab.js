import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default function RegisterLoginTab({ setUserId, getUserPrimary, setIsNewUser }) {
  const [key, setKey] = useState('register');

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{backgroundColor:'rgba(30, 119, 128, .7)'}}
        fill >
        <Tab eventKey="register" title="Register">
          <Register getUserPrimary={getUserPrimary} setIsNewUser={setIsNewUser} setUserId={setUserId} />
        </Tab>

        <Tab eventKey="login" title="Login">
          <Login setIsNewUser={setIsNewUser} getUserPrimary={getUserPrimary} setUserId={setUserId} />
        </Tab>
        
      </Tabs>
    </>
  )
}
