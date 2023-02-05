import React from 'react'
import AddEntry from './JournalComps/edit/AddEntry'
import Entries from './JournalComps/Entries'

export default function Journal({ userEntries, getUserEntries, userId }) {
  return (
    <>
      <div style={{margin:'0 5vw 10vh 5vw', height:'100vh', color:'#F7EBDF'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{}}>Journal Entries</h2>
          <AddEntry userId={userId} getUserEntries={getUserEntries} />
        </div>
        <div style={{margin:'0 1vw'}}>
          {/* i'll render out different Entry components here using the map method */}
          <Entries getUserEntries={getUserEntries} userEntries={userEntries} />
        </div>
      </div>
    </>
  )
}
