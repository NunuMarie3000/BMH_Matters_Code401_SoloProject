import axios from 'axios';
import React from 'react'

export default function DeleteEntry({ id, userId, getUserEntries, isDeleting, setIsDeleting }) {
  const handleDelete = async () =>{
    try {
      setIsDeleting(true);
      const url = `${process.env.REACT_APP_SERVER}/${userId}/entries/${id}`;
      await axios.delete(url);
      getUserEntries();
      setIsDeleting(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {isDeleting ? 
      <i style={{color:'red'}} onClick={handleDelete} className="fa-solid fa-trash-can"></i> : 
      <i onClick={handleDelete} className="fa-solid fa-trash-can"></i>}
    </>
  )
}
