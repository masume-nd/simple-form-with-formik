import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { useFormik } from "formik";

const Birthplace = (props) => {
   const formik = useFormik({
      initialValues: { 
         // province:"",
         // city: ""
      },
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
   });
   return (
         <>
            <select
               name="province"
               onChange={props.onChange}
               value={props.valueProvince}
               type="select"
               className="form-select"
            >
               <option value="" disabled selected hidden>
                 استان
               </option>

               {Object.keys(props.data).map((State,indx) => {
                  return <option value={State} key={indx}>{State}</option>;
               })}
            </select>

            <select
               onChange={props.onChange}
               onClick={() => {
                  !props.valueProvince &&
                     Swal.fire({
                        title: "لطفا استان خود را انتخاب کنید.",
                        width: 600,
                        padding: "3em",
                        color: "rgb(0,128,0)",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                       rgba(0,128,0,0.4)
                       url("/images/nyan-cat.gif")
                       left top
                       no-repeat
                     `,
                     });
               }}
               className="form-select"
               type="text"
               name="city"
            >
               <option value="" disabled selected hidden>
                  محل تولد
               </option>

               {Object.entries(props.data).map((stateCity) => {
                  let ostan = stateCity.splice(0, 1);
                  return stateCity[0].map(
                     (city, indx) =>
                        ostan[0] === props.valueProvince && <option value={city} key={indx}>{city}</option>
                  );
               })}
            </select>
         </>
   );
};

export default Birthplace;
