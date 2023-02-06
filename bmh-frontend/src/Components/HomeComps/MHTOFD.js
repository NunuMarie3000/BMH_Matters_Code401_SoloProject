import React from 'react'

export default function MHTOFD({ tip }) {
  return (
    <>
      <>
        <h2 style={{ marginBottom:'1vh'}}>Mental Health Tip of the Day</h2>
        <p style={{ marginTop:'0'}}>{tip[0].body}</p>
      </>
    </>
  )
}
