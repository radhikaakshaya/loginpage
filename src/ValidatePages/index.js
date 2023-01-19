import * as yup from 'yup'

export const LoginValidate=yup.object({
    email:yup.string().required("Please Enter the Username/Email"),
    password:yup.string().required("Please Enter the Password")
})

export const SignupValidation=yup.object({
    username:yup.string().max(30).required('please enter the username'),
    email:yup.string().email().required('please enter email'),
    password:yup.string().min(8).max(30).
    matches(/^(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/,
    'please enter atleast one special character').required('please enter the password')
})