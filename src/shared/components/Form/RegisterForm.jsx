import React from 'react'
import { Link } from 'react-router-dom';

export default function RegisterForm(props) {
    const {handelchange,handelregister} = props;
  return (
    <div className='max-w-[30rem] mx-auto my-10 overflow-hidden'>
        <div className='relative'>
            <div className='h-20 w-20 bg-rose-500 rounded-full absolute -top-4 -left-10'></div>
        </div>
        <form onSubmit={handelregister} className='grid grid-cols-1 bg-slate-100 rounded-lg'>
            <h1 className='text-2xl font-bold text-center my-10'>Create Account</h1>
              <div className='grid grid-cols-1  mx-auto'>
                  <label htmlFor="name" className='font-medium '>Name</label>
                  <input type="text" name='name' placeholder='Enter your Name' className=' w-[15rem] rounded-md px-2 py-1' onChange={handelchange} required />

                  <label htmlFor="email" className='font-medium mt-2'>Email</label>
                  <input type="email" name='email' placeholder='Enter your Email' className='border w-[15rem] rounded-md px-2 py-1' onChange={handelchange} required/>

                  <label htmlFor="password" className='font-medium mt-2'>Password</label>
                  <input type="password" name='password' placeholder='Enter your password' className='border w-[15rem] rounded-md px-2 py-1' onChange={handelchange} required />

                  <button type='submit' className='my-5 bg-red-300 rounded-xl font-bold p-1 hover:bg-blue-600 hover:text-white '>Register</button>
              </div>
              <div className='z-10 mr-3'>
                <p className='text-right relative  mb-2'>already have an account?<Link to="/Login" className="text-blue-500 hover:underline">click</Link></p>
              </div>
              <div className='relative'>
                <div className='h-20 w-20 absolute -bottom-6 -right-2 bg-orange-400 rounded-full'></div>
              </div>
              
        </form>
    </div>
  )
}
