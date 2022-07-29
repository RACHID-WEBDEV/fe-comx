import * as yup from 'yup';

export const SignInSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password must be atleast 6 character long'),
    agreeContact: yup.boolean()
  })
  .required();

export const IndividualRegSchema = yup
  .object({
    fname: yup
      .string()
      .required('Firstname is required')
      .min(3, 'Firstname should be of minimum 3 characters length')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    lname: yup
      .string()
      .required('Lastname is required')
      .min(3, 'Lastname should be of minimum 3 characters length')
      .matches(/^[aA-zZ\s]+$/, 'Last Name must not have a number '),
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password should be of minimum 6 characters length'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], "Password's not match"),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      )
      .min(11, 'Mininum of 11 numbers '),
    otp: yup.string('Enter your sent OTP').min(4, 'Mininum of 4 numbers ')
  })
  .required();

export const CorporateRegSchema = yup
  .object({
    companyName: yup
      .string()
      .required('Company name is required')
      .min(3, 'Company name should be of minimum 3 characters length')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
    businessType: yup.string().required('A select option is required!'),
    incorporationDate: yup.string().required('Incorporation date is required').nullable(),
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password should be of minimum 6 characters length'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], "Password's not match"),
    otp: yup.string('Enter your sent OTP').min(4, 'Mininum of 4 numbers ')
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
