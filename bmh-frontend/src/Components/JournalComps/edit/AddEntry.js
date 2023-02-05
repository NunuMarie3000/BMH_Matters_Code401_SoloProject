import React, { useState } from 'react'
import NewEntry from './NewEntry';

export default function AddEntry({ getUserEntries, userId }) {
  const [isAddClicked, setIsAddClicked] = useState(false);

  const handleClick = () =>{
    setIsAddClicked(!isAddClicked);
  }
  return (
    <>
      {/* i'll eventually need to pass down the user's userId to access their info in the database */}
      {isAddClicked ? <NewEntry userId={userId} getUserEntries={getUserEntries} handleClick={handleClick} isAddClicked={isAddClicked} /> : <button onClick={handleClick}><i className="fa-solid fa-pen"></i></button>}
    </>
  )
}
