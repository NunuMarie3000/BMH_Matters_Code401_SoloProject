import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import DeleteEntry from './edit/DeleteEntry';
import EditEntry from './edit/EditEntry';

// at some point i'll pass down title, body, etc. info to use in this component
export default function Entry({ id, title, body, dateCreated, dateUpdated, userId, getUserEntries }) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () =>{
    setIsEditClicked(!isEditClicked);
  }

  const convertDate = (tobesplit) =>{
    let datetime = tobesplit.split('T');
    let date = datetime[0];
    let time = datetime[1].split('.');
    let shortTime = time[0].split(':');
    return `${date}, ${shortTime[0]}:${shortTime[1]}`;
  }

  return (
    <>
      {/* this is where i'll create the individual entry */}

      <Card style={{marginBottom:'1rem', border: '1px solid black', borderRadius: '1%/5%', color:'black'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <Card.Subtitle className="mb-2 text-muted">Posted: {convertDate(dateCreated)}<br />
          {dateUpdated !== null && `Last Update: ${convertDate(dateUpdated)}`}
        </Card.Subtitle>
        <Card.Text>
          {body}
        </Card.Text>
        <Card.Footer style={{ borderStyle: 'none', display: 'flex', gap: '2rem' }}>
        
          <DeleteEntry isDeleting={isDeleting} setIsDeleting={setIsDeleting} getUserEntries={getUserEntries} id={id} userId={userId} />
          
          {/* i'll need to pass down title, body, entryDate, updatedDate, userId, entryId, isEditClicked, handleEditClick  */}
        <EditEntry isEditing={isEditing} setIsEditing={setIsEditing} getUserEntries={getUserEntries} dateCreated={dateCreated} userId={userId} id={id} title={title} body={body} isEditClicked={isEditClicked} toggleEdit={toggleEdit} />
        </Card.Footer>
      </Card.Body>
    </Card>
    </>
  )
}
