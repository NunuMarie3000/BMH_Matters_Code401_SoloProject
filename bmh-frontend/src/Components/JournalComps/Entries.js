import React from 'react'
import Entry from '../JournalComps/Entry'

export default function Entries({ userEntries, getUserEntries }) {
  return (
    <>
      {/* here is where i'll map through userEntries */}
      {userEntries !== null && userEntries.length === 1 &&
      <Entry getUserEntries={getUserEntries} userId={userEntries[0].userId} id={userEntries[0].id} title={userEntries[0].title} body={userEntries[0].body} dateCreated={userEntries[0].dateCreated} dateUpdated={userEntries[0].dateUpdated} />
      }

      {userEntries !== null && userEntries.length === 0 && <h4>You have no entries, make one!</h4>}
      {userEntries !== null && userEntries.length > 1 && userEntries.map((entry) =>
      <Entry getUserEntries={getUserEntries} key={entry.id} userId={entry.userId} id={entry.id} title={entry.title} body={entry.body} dateCreated={entry.dateCreated} dateUpdated={entry.dateUpdated} />)}
    </>
  )
}
