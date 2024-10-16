import { section } from 'framer-motion/client';
import React from 'react'

export default function ProfileForm(props) {
  const { formdata, handelchange, handleupdatedprofile } = props;
  return (
    <section>
      <div className='max-w-[30rem] mx-auto my-10 overflow-hidden'>
        <form onSubmit={handleupdatedprofile} className='grid grid-cols-1 bg-rose-200 text-black rounded-lg'>
          <h1 className='text-2xl font-bold text-center my-10'>Profile</h1>
          <div className='grid grid-cols-1  mx-auto'>
            <label htmlFor="profile" className='font-medium'>Profile</label>
            <input type="file"  name='profileimage' className='mb-4' onChange={handelchange}/>

            <label htmlFor="name" className='font-medium'>Name</label>
            <input type="text" value={formdata.name} name='name' placeholder='Enter your Name' className=' w-[15rem] rounded-md px-2 py-1' onChange={handelchange} />

            <label htmlFor="email" className='font-medium mt-2'>Email</label>
            <input type="email" value={formdata.email} name='email' placeholder='Enter your Email' className='border w-[15rem] rounded-md px-2 py-1' onChange={handelchange} readOnly />

            <button type='submit' className='my-10 bg-orange-400 rounded-xl font-bold p-1 hover:bg-blue-600 hover:text-white '>Update</button>
          </div>

        </form>
      </div>
    </section>
  )
}
