import React from 'react'

export default function LastJournaled({ lastJournal }) {
  return (
    <>
      <h2 style={{textAlign:'right', marginBottom:'1vh'}}>Last Journaled Thought</h2>
      <p style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{lastJournal[0].body}</p>
    </>
  )
}
