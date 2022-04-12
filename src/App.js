import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
import UserContext from "./components/UserContext";

function App() {
   const [isLoggedIn, setIsLogedIn] = useState(true);

   const greenStyle = {
      backgroundColor: "#198754",
   };
   const grayStyle = {
      backgroundColor: "gray",
   };
   const handleLoginClick = () => {
      setIsLogedIn(true);
   };

   const handleSignInClick = () => {
      setIsLogedIn(false);
   };
   return (
     
         <div className="signin-form-containter">
            <div className="button-container">
               <button
                  onClick={handleLoginClick}
                  className="my-btn"
                  style={isLoggedIn ? greenStyle : grayStyle}
               >
                  ورود
               </button>
               <button
                  onClick={handleSignInClick}
                  className="my-btn"
                  style={isLoggedIn ? grayStyle : greenStyle}
               >
                  ثبت نام
               </button>
            </div>
            {isLoggedIn ? <h1>خوش آمدید</h1> : <h1>ثبت نام کنید</h1>}

            <div className="App">{isLoggedIn ? <Login /> : <Signin />}</div>
         </div>

   );
}

export default App;
