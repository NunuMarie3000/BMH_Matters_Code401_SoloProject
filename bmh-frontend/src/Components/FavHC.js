import React from 'react'
// import ProviderCard from './HealthcareComps/ProviderCard'
import Provider from './HealthcareComps/Provider'

export default function FavHC({ providers, userId, getUserProviders }) {
  
  return (
    <>
      <div  style={{margin:'0 5vw 5vh 5vw', height:'100vh'}}>
        {providers.length === 0 && <h2>You can add your favorite healthcare providers by clicking the heart next to their info!</h2>}

        {providers.length === 1 && <Provider getUserProviders={getUserProviders} userId={userId} key={providers[0].providerId} id={providers[0].providerId} phone={providers[0].phone} addy1={providers[0].address1} addy2={providers[0].address2} city={providers[0].city} state={providers[0].state} zip={providers[0].zipCode} name={providers[0].name} title={providers[0].title} pic={providers[0].headshot} communities={providers[0].communities} issues={providers[0].issues} specialties={providers[0].specialties} about={providers[0].aboutSection}  />}

        {providers.length > 1 && providers.map((data) => <Provider getUserProviders={getUserProviders} userId={userId} key={data.providerId} id={data.providerId} phone={data.phone} addy1={data.address1} addy2={data.address2} city={data.city} state={data.state} zip={data.zipCode} name={data.name} title={data.title} pic={data.headshot} communities={data.communities} issues={data.issues} specialties={data.specialties} about={data.aboutSection} />)}
      </div>
    </>
  )
}
