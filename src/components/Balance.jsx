import React from 'react'

const Balance = () => {
  return (
    <div className='w-full shadow rounded-3xl p-5 h-full'>
      <h2 className='font-bold text-2xl pb-5'>Balance</h2>
      <div className='border-b-2 border-gray-300 flex gap-5 align-bottom items-end'>
        <div className='h-3 bg-amber-500 w-1/6'></div>
        <div className='h-5 bg-amber-500 w-1/6'></div>
        <div className='h-6 bg-amber-500 w-1/6'></div>
        <div className='h-10 bg-amber-500 w-1/6'></div>
        <div className='h-4 bg-amber-500 w-1/6'></div>
        <div className='h-20 bg-amber-500 w-1/6'></div>
        <div className='h-6 bg-amber-500 w-1/6'></div>
        <div className='h-6 bg-amber-500 w-1/6'></div>
      </div>   
      <p className='pt-5'>Total: <span className='font-bold'>3000€</span></p> 
    </div>
  )
}

export default Balance
