import React from 'react'

export default function Greeting({ userData }) {
  return (
    <div style={{ padding:'0 2vw'}}>
      <h2 style={{ marginBottom:'1vh'}}>Hello, {userData.firstName} !</h2>
      <p style={{ marginTop:'0', overflowWrap:'break-word'}}>lorem ipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumlorem</p>
    </div>
  )
}
