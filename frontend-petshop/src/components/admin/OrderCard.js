import React from 'react'

export default function OrderCard({order}) {
  return (
      <div className='flex justify-around  items-center flex-col sm:flex-row w-[400px] sm:w-[900px] sm:h-[150px] bg-orange-500/50 rounded-lg m-2 p-5'>
          
          <p className='mr-5 border-1'>{order._id} </p>
          <p className='mr-5'>{order.totalPrice}</p>
          <p className='mr-5'>{order.orderedDate.slice(0, 10)}</p>
          <p className='mr-5'>{order.carrier}</p>
          <p className='mr-5'>{order.status}</p>
          
    </div>
  )
}
