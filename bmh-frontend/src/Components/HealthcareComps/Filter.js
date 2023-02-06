import React from 'react'
import { Form } from 'react-bootstrap';

const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada"]

export default function Filter({ providerData, setFilteredData }) {
  const handleChange = (e) => {
    let chosenState = e.target.value;
    if (chosenState === states[0]) { setFilteredData(providerData.filter(d => d.associatedState === states[0])) }
    else if (chosenState === states[1]) { setFilteredData(providerData.filter(d => d.associatedState === states[1])) }
    else if (chosenState === states[2]) { setFilteredData(providerData.filter(d => d.associatedState === states[2])) }
    else if (chosenState === states[3]) { setFilteredData(providerData.filter(d => d.associatedState === states[3])) }
    else if (chosenState === states[4]) { setFilteredData(providerData.filter(d => d.associatedState === states[4])) }
    else if (chosenState === states[5]) { setFilteredData(providerData.filter(d => d.associatedState === states[5])) }
    else if (chosenState === states[6]) { setFilteredData(providerData.filter(d => d.associatedState === states[6])) }
    else if (chosenState === states[7]) { setFilteredData(providerData.filter(d => d.associatedState === states[7])) }
    else if (chosenState === states[8]) { setFilteredData(providerData.filter(d => d.associatedState === states[8])) }
    else if (chosenState === states[9]) { setFilteredData(providerData.filter(d => d.associatedState === states[9])) }
    else if (chosenState === states[10]) { setFilteredData(providerData.filter(d => d.associatedState === states[10])) }
    else if (chosenState === states[11]) { setFilteredData(providerData.filter(d => d.associatedState === states[11])) }
    else if (chosenState === states[12]) { setFilteredData(providerData.filter(d => d.associatedState === states[12])) }
    else if (chosenState === states[13]) { setFilteredData(providerData.filter(d => d.associatedState === states[13])) }
    else if (chosenState === states[14]) { setFilteredData(providerData.filter(d => d.associatedState === states[14])) }
    else if (chosenState === states[15]) { setFilteredData(providerData.filter(d => d.associatedState === states[15])) }
    else if (chosenState === states[16]) { setFilteredData(providerData.filter(d => d.associatedState === states[16])) }
    else if (chosenState === states[17]) { setFilteredData(providerData.filter(d => d.associatedState === states[17])) }
    else if (chosenState === states[18]) { setFilteredData(providerData.filter(d => d.associatedState === states[18])) }
    else if (chosenState === states[19]) { setFilteredData(providerData.filter(d => d.associatedState === states[19])) }
    else if (chosenState === states[20]) { setFilteredData(providerData.filter(d => d.associatedState === states[20])) }
    else if (chosenState === states[21]) { setFilteredData(providerData.filter(d => d.associatedState === states[21])) }
    else if (chosenState === states[22]) { setFilteredData(providerData.filter(d => d.associatedState === states[22])) }
    else if (chosenState === states[23]) { setFilteredData(providerData.filter(d => d.associatedState === states[23])) }
    else if (chosenState === states[24]) { setFilteredData(providerData.filter(d => d.associatedState === states[24])) }
    else if (chosenState === states[25]) { setFilteredData(providerData.filter(d => d.associatedState === states[25])) }
    else if (chosenState === "all") { setFilteredData(providerData) }
  }
  return (
    <>
      {/* here is where i'll build my filter/search bar, for now, we'll only be filtering by state */}
      <Form style={{ marginBottom: '1.5vh' }}>
        <Form.Label>Search Mental Health Providers by State</Form.Label>
        <Form.Select style={{width:'50%', overflow:'scroll'}} defaultValue='all' onChange={handleChange}>
          <option value="all">All States</option>
          {states.map((s) => <option key={states.indexOf(s)} value={s}>{s}</option>)}
        </Form.Select>
      </Form>
    </>
  )
}
