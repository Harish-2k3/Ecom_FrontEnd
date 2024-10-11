import React from 'react'

export default function ProductCard(props) {
  const {products,setcount} = props
  const {inc,dec} = props
  return (
    <div className='max-w-[85rem] w-full mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((item,index)=>
          <div className='p-4 border shadow-lg rounded-xl' key={index}>
            <div className=''>
            <img src={item.thumbnail} alt="loading" className='w-full object-cover'/>
            </div>
          <div className='mt-5'>
            <h1 className='text-xl font-bold'>{item.title}</h1>
            <h2 className='mb-3 text-blue-400 font-bold'><span className='text-lg text-red-600'>$</span>{item.price}</h2>
            <div className='mb-3'>
              <button onClick={dec} className='px-3 bg-gray-400 rounded-[1px] font-bold'>-</button>
              <button onClick={inc} className='px-3 bg-gray-400 mr-2 rounded-[1px] font-bold'>+</button>
            </div>
            <button className='w-full px-4 py-2 rounded-2xl bg-blue-950 text-white'>Add to Card</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
