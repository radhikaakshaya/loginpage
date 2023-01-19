import React, { useState } from 'react'
import {HiOutlineUser,HiUserGroup} from 'react-icons/hi'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useFormik } from 'formik'
import {toast} from 'react-toastify'
import { LoginValidate } from '../ValidatePages'
import axios from 'axios'

const initialValues={email:'',password:''}
const LoginPage = () => {
  const {values,handleBlur, errors,touched,handleChange}=useFormik({
initialValues:initialValues,
validationSchema:LoginValidate
  })

  const loginhandle=()=>{
    axios.post('http://localhost:4000/user/login',
    {email:values.email,password:values.password})
    .then(data=>{
      console.log(data.data,'fg')
     if(data.data.status==200){
      toast.success(data.data.message)
     }else{
      toast.error(data.data.message);
     }
     
    })
    .catch(error=>console.log(error))
  }
  
  return (
    <div className='flex h-screen justify-center items-center'
    style={{backgroundImage:'linear-gradient(to right,yellow,blue)'}}>

<div className='flex flex-col gap-4 border-2 border-slate-300 rounded-md p-4 bg-white'>
<div className='grid justify-items-center'>
    <HiUserGroup className='w-40 h-20'/>
    </div>
    <div className='flex gap-2 items-center bg-blue-200 shadow-lg 
  rounded-l-full'>
  <span className='w-10 h-10 px-2'>
  <HiOutlineUser className='w-full h-full text-black '/>
  </span>
  <span>
 <input type="text" placeholder='Username/Email'
  name='email' value={values.email} autoComplete='off'  
className='w-80 outline-none text-white text-xl'
 onChange={handleChange} onBlur={handleBlur}
  style={{backgroundColor:'transparent'}} /> 
  </span>
</div>
{
  errors.email && touched.email ?
  <p className='text-red-800 text-xl'>{errors.email}</p>
  : null
}
<div className='flex gap-2 items-center bg-blue-200 shadow-lg 
  rounded-l-full'>
  <span className='w-10 h-10 px-2'>
  <RiLockPasswordFill className='w-full h-full text-black '/>
  </span>
  <span>
 <input type="password" placeholder='Password'
  name='password' value={values.password} autoComplete='off'  
className='w-80 outline-none text-white text-xl'
 onChange={handleChange} onBlur={handleBlur}
  style={{backgroundColor:'transparent'}} /> 
  </span>
</div>
{
  errors.password && touched.password ?
  <p className='text-red-800 text-xl'>{errors.password}</p>
  : null
}
<button style={{backgroundImage:'linear-gradient(to right,green,red)'}}
className='text-white text-lg rounded-full'
onClick={()=>{
 loginhandle()
 
}}
>
Login
</button>
</div>
    </div>
  )
}

export default LoginPage