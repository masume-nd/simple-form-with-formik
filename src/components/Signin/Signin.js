import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Education from "./Education";
import Birthplace from "./Birthplace";
import axios from "axios";
import * as Yup from "yup";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const SignupSchema = Yup.object({
   firstName: Yup.string()
      .min(2, "نام شما باید حداقل ۳ کارکتر داشته باشد!")
      .max(50, "نام شما باید حداکثر ۵۰ کارکتر داشته باشد!")
      .required(" این فیلد نباید خالی باشد"),
   lastName: Yup.string()
      .min(2, "نام شما باید حداقل ۳ کارکتر داشته باشد!")
      .max(50, "نام شما باید حداکثر ۵۰ کارکتر داشته باشد!")
      .required("این فیلد نباید خالی باشد "),
   email: Yup.string()
      .email(" لطفا آدرس ایمیل معتبر وارد کنید.")
      .max(255)
      .required(" این فیلد نباید خالی باشد"),
   password: Yup.string()
      .min(7, "کلمه عبور شما باید حداقل 8 کارکتر داشته باشد!")
      .max(50, "کلمه عبور شما باید حداکثر 50 کارکتر داشته باشد!")
      .required("این فیلد نباید خالی باشد "),
});
// const handleReset = (resetForm) => {
//    if (window.confirm('Reset?')) {
//      resetForm();
//    }
//  };

const Signin = () => {
   const [data, setdata] = useState({});
   const [birthData, setBirthData] = useState();
   const [passVisibility, setpassVisibility] = useState(false);

   useEffect(() => {
      axios
         .get("/iranstates.json")
         .then((res) => {
            setdata(res.data);
         })
         .catch((error) => alert(error));
   }, []);

   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         province: "",
         city: "",
      },
      validationSchema: SignupSchema,

      onSubmit: (values, { setSubmitting, resetForm }) => {
         setSubmitting(false);
         alert("ثبت نام با موفقیت انجام شد :)");
         axios.post("http://localhost:3001/users", {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            province: values.province,
            city: values.city,
         });
         resetForm();
      },
   });

   return (
      <form className="general-form" onSubmit={formik.handleSubmit}>
         <div className="name-container">
            <div>
               <input
                  className="form-input"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="نام"
               />

               <p className="error">
                  {formik.touched.firstName &&
                     formik.errors.firstName &&
                     formik.errors.firstName}
               </p>
            </div>
            <div>
               <input
                  className="form-input"
                  id="lastName"
                  name="lastName"
                  type="text"
                  style={{marginRight:"12px"}}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  placeholder="نام خانوادگی"
               />{" "}
               <p className="error">
                  {formik.errors.lastName &&
                     formik.touched.lastName &&
                     formik.errors.lastName}
               </p>
            </div>
         </div>
         <Education />
         <Birthplace
            data={data}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            valueCity={formik.values.province}
            valueProvince={formik.values.province}
         />
         <div className="email-pass" style={{ width: "98%" }}>
            <input
               className="form-input"
               type="email"
               name="email"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}
               placeholder="پست الکترونیک"
            />
            <p className="error">
               {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
            </p>
            <div className="icon-position">
               <input
                  className="form-input"
                  type={passVisibility ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="کلمه عبور"
               />

               <span
                  onClick={() => setpassVisibility(!passVisibility)}
                  className="icon"
               >
                  {passVisibility ? <BsEyeSlashFill /> : <BsEyeFill />}
               </span>
            </div>
            <p className="error">
               {formik.errors.password &&
                  formik.touched.password &&
                  formik.errors.password}
            </p>
         </div>
         <div className="button-container">
            <input value="ثبت نام" className="my-btn" type="submit" style={{width:"96%"}} />
         </div>
      </form>
   );
};

export default Signin;
