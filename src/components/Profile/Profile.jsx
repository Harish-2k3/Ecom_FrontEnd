import React, { useEffect, useState } from 'react'
import { apigetUser, apiupdateuser } from '../../shared/services/User/apiUser';
import ProfileForm from '../../shared/components/Form/ProfileForm';
import toast from 'react-hot-toast';

export default function Profile() {
    const[formdata,setformdata]= useState({});
    const handlechanges = (e) => setformdata({...formdata,[e.target.name]: e.target.files && e.target.files.length > 0 ? e.target.files[0] : e.target.value});
    
    const getuser = async () => {
        const res = await apigetUser();
        setformdata(res);
    }
    useEffect(()=>{
        getuser();
      },[]);
  

    const handleupdatedprofile=async(e)=>{
        e.preventDefault();
        const res = await apiupdateuser(formdata);
        res.message === "Sucessfully Updated"?prfupdate(res):toast.error(res.message)
    }

    const prfupdate=(res)=>{
        getuser();
        toast.success(res.message);
    };
  
    return (
      <div className='mt-3'>
        <ProfileForm  formdata={formdata} handelchange={handlechanges} handleupdatedprofile={handleupdatedprofile}/>
      </div>
    );
}
