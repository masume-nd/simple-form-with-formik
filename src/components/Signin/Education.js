import React from "react";
import { useFormik } from "formik";

const Education = () => {
   const formik = useFormik({
      initialValues: {
         education: false,
      },
      onChange() {
         console.log(formik.values.education);
      },
   });

   return (
      <>
         <select
            name="education"
            onChange={formik.handleChange}
            className="form-select select-size"
            type="email"
            placeholder="میزان تحصیلات"
         >
            <option value="" disabled selected hidden>
               میزان تحصیلات
            </option>
            
            <option value="CONSTANCY">سیکل</option>
            <option value="diploma">دیپلم</option>
            <option value="COMPLEMENT">فوق دیپلم</option>
            <option value="COMPLEMENT">لیسانس</option>
            <option value="COMPLEMENT">فوق لیسانس</option>
            <option value="COMPLEMENT">دکترا</option>
         </select>

         <div style={{width:"98%", marginRight:"6px"}}>
            {formik.values.education && (
               <input
                  className="form-input select-size"
                  type="text"
                  placeholder="محل تحصیل"
                  required
               ></input>
            )}
         </div>
      </>
   );
};

export default Education;
