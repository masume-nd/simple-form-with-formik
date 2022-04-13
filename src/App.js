import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import LoginContext from "./components/Login/LoginContext";
import Signin from "./components/Signin/Signin";
import UserContext from "./components/UserContext";
import Withlogin from "./components/WithLogin";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [loggedInUsers, setLoggedInUsers] = useState([]);
   const [isShow, setIsShow] = useState(true);
  
   const greenStyle = {
      backgroundColor: "#198754",
   };
   const grayStyle = {
      backgroundColor: "gray",
   };
   const handleLoginClick = () => {
      setIsShow(true);
   };

   const handleSignInClick = () => {
      setIsShow(false);
   };
   return (
      <UserContext.Provider value={loggedInUsers}>
         <div className="signin-form-containter">
            <div className="button-container">
               <button
                  onClick={handleLoginClick}
                  className="my-btn"
                  style={isShow ? greenStyle : grayStyle}
               >
                  ورود
               </button>
               <button
                  onClick={handleSignInClick}
                  className="my-btn"
                  style={isShow ? grayStyle : greenStyle}
               >
                  ثبت نام
               </button>
            </div>
            {isShow ? <h1>خوش آمدید</h1> : <h1>ثبت نام کنید</h1>}

            <div className="App">
               {isShow ? (
                  <Login
                     isLoggedIn={isLoggedIn}
                     setIsLoggedIn={setIsLoggedIn}
                     setLoggedInUsers={setLoggedInUsers}
                  />
               ) : (
                  <Signin />
               )}
            </div>
         </div>
      </UserContext.Provider>
   );
}

export default Withlogin(App);
