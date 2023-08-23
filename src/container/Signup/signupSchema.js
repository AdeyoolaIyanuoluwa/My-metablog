import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "Name is too short")
    .max(20, "Name is too Long")
    .required("firstname is required"),
  lastname: Yup.string()
    .min(2, "Name is too short")
    .max(20, "Name is too Long")
    .required("lastname is required"),
  email: Yup.string().email("Invalid Email").required("Enter a valid Email"),
  password: Yup.string()
    .required("password is required")
    .trim()
    .matches(
      /(?=.*[A-Z])/,
      "Your password needs to have at least one capital letter"
    )
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Your password needs to have at least one special character"
    )
    .matches(
      /(?=.*[a-z])/,
      "Your password needs to have at least one lower case character"
    )
    .matches(/(?=.*[0-9])/, "Your password needs to have at least one number")
    .min(4)
    .max(10),
});
