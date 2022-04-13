import React, { useContext } from 'react';
import Withlogin from './WithLogin';
import { UserContext } from './UserContext';

const Sayhello = () => {
  const loggedInUsers = useContext(UserContext);

  return (
    <div>
      <h1 style={{color:"black"}}>سلام {loggedInUsers.firstName} عزیز</h1>
      <button>Logout</button>
    </div>
  );
}

export default Sayhello;
