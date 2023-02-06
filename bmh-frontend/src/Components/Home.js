import React from 'react'
import MHTOFD from './HomeComps/MHTOFD'
import Greeting from './HomeComps/Greeting'
import LastJournaled from './HomeComps/LastJournaled'

export default function Home({ userId, userData, lastJournal, tip, greeting }) {
  // needs to make an axios request to get the MHTOFD
  // i'll also have to get the last journaled thought
  return (
    <>
      <div style={{ margin: '0 5vw 12vh 5vw', height: '65vh', gap:'1vh' }}>
        <div style={{ backgroundColor: 'rgba(30, 119, 128, .3)', width: '100%',padding:'2vw', boxShadow:'5px 5px 10px rgba(0,0,0,.1)', marginBottom:'5px' }}>
          <Greeting greeting={greeting} userData={userData} />
        </div>
        <div style={{ textAlign:'center', padding:'2vw'}}>
          <MHTOFD tip={tip} />
        </div>
        <div style={{ backgroundColor: 'rgba(30, 119, 128, .3)', width: '100%', padding:'2vw', boxShadow:'5px 5px 10px rgba(0,0,0,.1)' }}>
          <LastJournaled lastJournal={lastJournal} />
        </div>
      </div>
    </>
  )
}
