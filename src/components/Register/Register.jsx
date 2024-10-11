import React, { useState } from 'react'
import RegisterForm from '../../shared/components/Form/RegisterForm'
import { apiRegister } from '../../shared/services/authentication/apiRegister';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {

const [formdata,setformdata] = useState({});
const navigate = useNavigate();
const handelchange =async (e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
}
const handelregister=async(e)=>{
    e.preventDefault();
    console.log(formdata);
    const res = await apiRegister(formdata)
    console.log(res)
    res.message=="Sucessfully Registered"? sucessfullReg(res):toast.error(res.message)
}

const sucessfullReg=(res)=>{
  toast.success(res.message);
  navigate("/login");
}
  return (
    <div>
        <RegisterForm handelchange={handelchange} handelregister={handelregister}/>
    </div>
  )
}
