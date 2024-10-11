import React, { useState } from 'react'
import LoginForm from '../../shared/components/Form/loginForm'
import { Navigate, useNavigate } from 'react-router-dom';
import { apiLogin } from '../../shared/services/authentication/apiLogin';
import toast from 'react-hot-toast';
import useAuth from '../../shared/hooks/useAuth';

export default function Login() {
  const {setToken} = useAuth();
  const [formdata,setformdata] = useState({});
  const navigate = useNavigate();
  const handelchange =(e)=>{
    setformdata({...formdata,...{[e.target.name]:e.target.value}});
}

const handellogin=async(e)=>{
  e.preventDefault();
  console.log(formdata)
  const res = await apiLogin(formdata)
  console.log(res)
  res.message=="Sucessfully Login"?sucessfulllogin(res):toast.error(res.message)
}

const sucessfulllogin=(res)=>{
  setToken(res.token);
  toast.success(res.message);
  navigate("/home");
}


  return (
    <div>
      <LoginForm handelchange={handelchange} handellogin={handellogin} />
    </div>
  )
}
