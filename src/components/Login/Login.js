import React, { useState } from "react";
import { Formik } from "formik";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import axios from "axios";

const Login = (props) => {
   const [passVisibility, setpassVisibility] = useState(false);
   return (
      <>
         <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
               const errors = {};
               if (!values.email) {
                  errors.email = "نباید خالی باشد";
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = " لطفا آدرس ایمیل معتبر وارد کنید.";
               }
               if (!values.password) {
                  errors.password = "نباید خالی باشد";
               } else if (values.password < 8) {
                  errors.password = "رمز عبور باید حداقل ۸ کارکتر باشد!";
               }
               return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
               alert(JSON.stringify(values, null, 2));
               setSubmitting(false);
               axios.get("http://localhost:3001/users").then((res) => {
                  res.data.map((item) => {
                     if (
                        item.email === values.email &&
                        item.password === values.password
                     ) {
                        props.setLoggedInUsers((preveState) => [...preveState, item])
                        props.setIsLoggedIn(true);
                     }
                  });
               });
            }}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
               /* and other goodies */
            }) => (
               <form className="general-form" onSubmit={handleSubmit}>
                  <input
                     className="form-input"
                     type="email"
                     name="email"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                     placeholder="پست الکترونیک"
                  />
                  <p className="error">
                     {errors.email && touched.email && errors.email}
                  </p>
                  <div className="icon-position">
                     <input
                        className="form-input"
                        type={passVisibility ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="کلمه عبور"
                     />
                     <span
                        onClick={() => setpassVisibility(!passVisibility)}
                        className="icon"
                     >
                        {passVisibility ? <BsEyeSlashFill /> : <BsEyeFill />}
                     </span>
                  </div>
                  {errors.password && touched.password && errors.password}
                <div className="button-container"> 
                  <input value="ورود" className="my-btn" type="submit" />
               </div> 
               </form>
            )}
         </Formik>
      </>
   );
};
export default Login;
