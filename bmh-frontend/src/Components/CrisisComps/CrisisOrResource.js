import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Crisis from './Crisis';
import Resources from './Resources';

export default function CrisisOrResource() {
  const [key, setKey] = useState('crisis');
  return (
    <>
    <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill >
        <Tab eventKey="crisis" title="Crisis">
          <Crisis />
        </Tab>

        <Tab eventKey="resources" title="Resources">
          <Resources />
        </Tab>
        
      </Tabs>
    </>
  )
}
