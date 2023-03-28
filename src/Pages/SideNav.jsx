import React from 'react'
import jwtDecode from 'jwt-decode';
import { NavLink, useNavigate } from 'react-router-dom';

const SideNav = () => {
    const navigate=useNavigate();
    const token=localStorage.getItem("userInfo")
    let decodedtoken=jwtDecode(token);
 const role=decodedtoken.data[0]?.role_id;
  return (
    <div className='flex flex-col gap-2'>
        <NavLink to={'/home/about'}>
        <h1>About</h1>
        </NavLink>
        
{
    [1].includes(role) &&(
        <NavLink to={'/home/approval'}>
<h1>Approval</h1>
        </NavLink>
    )
}
    </div>
  )
}

export default SideNav