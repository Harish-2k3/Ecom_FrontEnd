import React, { useEffect, useState } from 'react'
import { apigetUser, apiupdateuser } from '../../shared/services/User/apiUser';
import ProfileForm from '../../shared/components/Form/ProfileForm';
import toast from 'react-hot-toast';

export default function Profile() {
    const[formdata,setformdata]= useState({});
    const handlechanges = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.files.length > 0 ? e.target.files[0] : e.target.value,
        });
    };
    const getuser = async () => {
        try {
            const res = await apigetUser();
            setformdata(res);
        } 
        catch (error) {
            console.error("Error fetching user:", error);
            toast.error("Failed to fetch user data.");
        }
    };
  
    useEffect(()=>{
      getuser();
    },[]);

    const handleupdatedprofile=async(e)=>{
        e.preventDefault();
        const res = await apiupdateuser(formdata);
        res.message == "Sucessfully Updated"? toast.success(res.message):toast.error(res.message)
    }
  
    return (
      <div className='mt-3'>
        <ProfileForm  formdata={formdata} handelchange={handlechanges} handleupdatedprofile={handleupdatedprofile}/>
      </div>
    );
}
