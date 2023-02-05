import React from 'react'
import defaultPic from '../images/imageNotAvailable.jpeg';

export default function Profile({ userData }) {
  const convertDate = (tobesplit) =>{
    let datetime = tobesplit.split('T');
    let date = datetime[0];
    return date;
  }
  return (
    <>
      <img style={{borderRadius:'50%'}} alt="profile pic" src={userData.profilePic === null ? defaultPic : userData.profilePic} />

      <div>{userData.firstName}'s Birthday: <br/>{convertDate(userData.birthday)}</div>
    </>
  )
}
