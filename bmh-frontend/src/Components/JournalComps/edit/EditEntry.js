import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function EditEntry({ isEditClicked, toggleEdit, id, title, body, userId, dateCreated, getUserEntries, isEditing, setIsEditing }) {
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const handleClose = () => {
    toggleEdit();
  }

  const hasItChanged = () => {
    let updatedTitle;
    let updatedBody;

    // newTitle != '' ? oldTitle = newTitle : oldTitle = title;
    if(newTitle !== ''){updatedTitle = newTitle} else{updatedTitle = title}
    if(newBody !== ''){updatedBody = newBody} else{updatedBody = body}

    // i'll return the body of the post request from this method
    const updatedEntry = {
      "title":updatedTitle,
      "body":updatedBody
    }

    return updatedEntry;
  }

  const handleSubmit = async(e) =>{
    // i need url route to hit for making post request to update edit entry
    const url = `${process.env.REACT_APP_SERVER}/api/${userId}/entries/${id}`;
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    try{
      setIsEditing(true);
      e.preventDefault();
      const whatToSend = hasItChanged();
      await axios.put(url,whatToSend,axiosConfig);
      getUserEntries();
      setIsEditing(false);
      handleClose();
      // i'll probs also need a higher method to get all entries from the database
    }catch(e)
    {
      console.log(e.message);
    }
  }

  return (
    <>
      <i onClick={toggleEdit} className="fa-solid fa-pencil"></i>

      <Modal show={isEditClicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit} >

            <Form.Group className="mb-3" controlId="post_title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" defaultValue={title} onChange={(e) => setNewTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="post_body">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" defaultValue={body} onChange={(e) => setNewBody(e.target.value)} />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
