import * as yup from 'yup'

export const LoginValidate=yup.object({
    username:yup.string().min(4).max(30).required("Please Enter the Username"),
    password:yup.string().min(6).required("Please Enter the Password")
})