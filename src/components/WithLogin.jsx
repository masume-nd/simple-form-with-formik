import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import SayHello from './SayHello'

const Withlogin = (Component) => {
  return function WithLoginApp () {
    const loggedInUsers = useContext(UserContext);
    console.log(loggedInUsers);
    return <>{loggedInUsers ? <SayHello/>  : <Component />}</>;
  };

}
   


export default Withlogin;
