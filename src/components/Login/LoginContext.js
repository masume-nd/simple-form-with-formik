import React, { useState, useContext } from "react";
import UserContext from "../UserContext";
import Withlogin from "../WithLogin";
import Login from "./Login";

const LoginContext = () => {
  const [loginUsers, setloginUsers] = useState({});
   return (
      <>
       <UserContext.Provider value={loginUsers}>
         <Login />
      </UserContext.Provider>
      </>
   );
};

export default Withlogin(LoginContext)