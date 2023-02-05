import React, { useState } from 'react'
import App from './App'
import axios from 'axios'
import RegisterLoginTab from './Components/Auth/RegisterLoginTab';

export default function Top() {
  const [isNewUser, setIsNewUser] = useState(true);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);

  const setUserIdFunction = (userId) => {
    setUserId(userId);
  }

  const getUserPrimary = async (id) => {
    const url = `${process.env.REACT_APP_SERVER}/api/user/${id}`
    try{
      const response = await axios.get(url);
      setUserData(response.data);
      return response.data;
    }catch(e)
    {
      console.log(e.message);
    }
  }

  if (userId === null) {
    return (<><RegisterLoginTab setIsNewUser={setIsNewUser} getUserPrimary={getUserPrimary} setUserId={setUserIdFunction} /></>)
  }
  else {
    return (
      <> 
        {userData !== null && <App isNewUser={isNewUser} userId={userId} userData={userData} />}
      </>
    )
  }
}