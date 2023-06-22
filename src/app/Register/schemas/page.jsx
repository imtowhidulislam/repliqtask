import * as yup from "yup";

const passValidator = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
export const formSchema = yup.object().shape({
    firstName : yup.string().required("enter your first name"),
    lastName : yup.string().required("enter your last name"),
    email : yup.string().email('please enter your email').required("feild can't be empty"),
    image : yup.string().required("enter you image"),
    password : yup.string().matches(passValidator, {message : "Minimum eight characters, at least one letter and one number"}).required("enter your password")
})