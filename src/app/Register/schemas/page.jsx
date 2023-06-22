import * as yup from "yup";

const passValidator = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
export const formSchema = yup.object().shape({
  fName: yup.string().required("enter your first name"),
  lName: yup.string().required("enter your last name"),
  email: yup
    .string()
    .email("please enter your email")
    .required("field can't be empty"),
  file: yup.mixed().required("Image need to be uploaded"),
  password: yup
    .string()
    .matches(passValidator, {
      message: "Minimum eight characters, at least one letter and one number",
    })
    .required("enter your password"),
});
