import React from 'react'
import MHTOFD from './HomeComps/MHTOFD'
import Greeting from './HomeComps/Greeting'
import LastJournaled from './HomeComps/LastJournaled'

export default function Home({ userId, userData, lastJournal, tip }) {
  // needs to make an axios request to get the MHTOFD
  // i'll also have to get the last journaled thought
  return (
    <>
      <div style={{ margin: '0 5vw 12vh 5vw', height: '65vh', gap:'1vh' }}>
        <div style={{ backgroundColor: 'rgba(30, 119, 128, .3)', gridColumn: '1/2', width: '100%' }}>
          <Greeting userData={userData} />
        </div>
        <div>
          <MHTOFD tip={tip} />
        </div>
        <div style={{ backgroundColor: 'rgba(30, 119, 128, .3)', gridColumn: '2/3', width: '100%' }}>
          <LastJournaled lastJournal={lastJournal} />
        </div>
      </div>
      {/* <div style={{ margin:'0 5vw 10vh 5vw', paddingBottom:'5vh', height:'65vh' }}>
        <div style={{ marginBottom: '1vh' }}>
          <MHTOFD tip={tip} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          columnGap: '2vw'
        }}>
          <div style={{ backgroundColor: 'rgb(255, 255, 255, .7)', gridColumn: '1/2', width: '100%', borderRadius: '5%' }}>
            <Greeting userData={userData} />
          </div>
          <div style={{ backgroundColor: 'rgb(255, 255, 255, .7)', gridColumn: '2/3', width: '100%', borderRadius: '5%' }}>
            <LastJournaled lastJournal={lastJournal} />
          </div>
        </div>
      </div> */}
    </>
  )
}
