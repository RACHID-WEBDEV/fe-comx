import * as yup from 'yup';

export const SignInSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password must be atleast 6 character long')
  })
  .required();

export const SignUpSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password should be of minimum 6 characters length'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], "Password's not match"),
    acceptTerms: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    agreeContact: yup.boolean()
  })
  .required();

export const ResetPasswordSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email is required')
  })
  .required();

export const ForgotPasswordSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email address is required')
  })
  .required();
