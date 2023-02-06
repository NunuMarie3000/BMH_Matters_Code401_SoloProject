import React from 'react'

export default function Greeting({ userData, greeting }) {
  return (
    <>
      <h2 style={{ marginBottom:'1vh'}}>Hello, {userData.firstName} !</h2>
      <p style={{ marginTop:'0', overflowWrap:'break-word'}}>
        {greeting[1].body}
      </p>
    </>
  )
}
