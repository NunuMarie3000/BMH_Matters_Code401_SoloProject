import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import Providers from './HealthcareComps/Providers';
import Filter from './HealthcareComps/Filter';

export default function Healthcare({  userId, isHealthcareLoading, filteredData, providerData, setFilteredData, getUserProviders }) {

  useEffect(() => {
     setFilteredData(providerData);
     //eslint-disable-next-line
  }, [providerData])

  return (
    <>
      {providerData !== null && 
      <div style={{margin:'0 5vw 5vh 5vw'}}>
        <Filter getUserProviders={getUserProviders} providerData={providerData} setFilteredData={setFilteredData} />

        {isHealthcareLoading && <h2 style={{color:'white'}}>Loading Healthcare Providers...<Spinner animation='border' role='status'></Spinner></h2>}

        {filteredData !== null && filteredData.length === 0 && <h1>I'm sorry, there are no providers in that area right now. Check back soon!</h1>}

        { filteredData !== null && filteredData.length !== 0 && <Providers getUserProviders={getUserProviders} userId={userId} filteredData={filteredData} providerData={providerData} />}

      </div>}
    </>
  )
}
