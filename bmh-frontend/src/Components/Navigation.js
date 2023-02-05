import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BottomNavigation, styled } from '@mui/material';
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
color: white;
&.Mui-selected {
  color: #EAD721;
}
`)

export default function Navigation() {
  const [newValue, setNewValue] = useState(2);

  return (
    <>
      <BottomNavigation
        sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: '#1E7780' }}
        showLabels={false}
        value={newValue}
        onChange={(e, newValue) => {
          setNewValue(newValue);
        }}
      >
        <BottomNavigationAction LinkComponent={Link} to={'/crisis'} label="Crisis" icon={<i className="fa-solid fa-suitcase-medical"></i>} />
        <BottomNavigationAction LinkComponent={Link} to={'/favorites'} label="Fav" icon={<i className="fa-solid fa-heart"></i>} />
        <BottomNavigationAction LinkComponent={Link} to={'/'} label="Home" icon={<i className="fa-solid fa-house"></i>} />
        <BottomNavigationAction LinkComponent={Link} to={'/healthcare'} label="Health" icon={<i className="fa-solid fa-user-doctor"></i>} />
        <BottomNavigationAction LinkComponent={Link} to={'/journal'} label="Journal" icon={<i className="fa-solid fa-pen-to-square"></i>} />
      </BottomNavigation>
    </>
  )
}
