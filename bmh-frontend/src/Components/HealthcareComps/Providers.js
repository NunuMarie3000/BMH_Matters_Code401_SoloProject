import React from 'react'
import Provider from './Provider'

export default function Providers({ providerData, filteredData, getUserProviders, userId }) {
  return (
    <>
      <div style={{overflow:'scroll', paddingBottom:'5vh'}}>
      {filteredData.map((data) =>
        <Provider userId={userId} getUserProviders={getUserProviders} key={data.providerId} id={data.providerId} phone={data.phone} addy1={data.address1} addy2={data.address2} city={data.city} state={data.state} zip={data.zipCode} name={data.name} title={data.title} pic={data.headshot} communities={data.communities} issues={data.issues} specialties={data.specialties} about={data.aboutSection} />)}
      </div>
    </>
  )
}
