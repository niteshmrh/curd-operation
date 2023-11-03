import * as Yup from "yup";

// ----------------------------------------------------------------------------------------
//                             Add User model validation
// ----------------------------------------------------------------------------------------
export const addUserValidationSchema = Yup.object({
  Name: Yup.string()
    .matches(/^[A-Za-z ]{3,}$/, "Invalid Name!")
    .min(3, "Loo Short")
    .required("Name can not be empty!"),
  Email: Yup.string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address!"
    )
    .min(3, "Too Short")
    .required("Email can not be empty!"),
  Mobile: Yup.string()
    .matches(/^[6-9]{1}[0-9]{9}$/, "Invalid Mobile Number!")
    .max(10, "Too Long !")
    .min(10, "Too Short !")
    .required("Mobile can not be empty!"),
});
