import * as Yup from 'yup'

// =========== SIGN-UP =============

const signUpValidationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    phone_number: Yup.string().required("Phone number is required"),
    email: Yup.string().required("Email address is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
  });

  export {signUpValidationSchema}
// =========== SIGN-UP END =============