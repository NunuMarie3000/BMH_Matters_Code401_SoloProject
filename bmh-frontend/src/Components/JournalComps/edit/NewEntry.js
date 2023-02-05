import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// i'll eventually also need to pass down the user's userId or whatever data to locate them in the database
export default function NewEntry({ handleClick, isAddClicked, getUserEntries, userId }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleClose = () => {
    handleClick();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = "whatever the backend route is for saving new entries to the database"
    const url = `${process.env.REACT_APP_SERVER}/api/${userId}/newentry`;
    // i'll wanna send the title and body of the new entry, i'll also need the user's userId when I create them in the sql database
    const newEntry = {
      userId,
      title,
      body
    }
    try {
      await axios.post(url, newEntry);
      getUserEntries();
      handleClose();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Modal show={isAddClicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit} >

            <Form.Group className="mb-3" controlId="post_title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" required placeholder="I cried today...and that's okay!" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="post_body">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" required placeholder="Sometimes I feel out of control of my emotions, but I have to remember..." onChange={(e) => setBody(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
