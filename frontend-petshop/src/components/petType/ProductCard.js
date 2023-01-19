import React from 'react'

import cardImage from '../../image/dog.jpeg';


export default function ProductCard({product}) {



  return (
      <div className='flex flex-col border w-[325px] h-[450px] box-border rounded-lg p-4 mb-3 relative'>
          <img src={cardImage} alt='card-pic' className='w-[100%] h-[200px] mb-3'/>
          <p className='text-sm  text-gray-500'>{product.brand} - {product.petName}</p>
          <p className='font-bold text-sm mb-1'>{product.productName}</p>
      <p></p>
      <div className='flex justify-center items-center '>
          <p className='border w-[80%] flex justify-center items-center rounded-lg bg-orange-100 absolute bottom-0 mb-4 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50'>$ {product.price}</p>
          </div>
          
    </div>
  )
}
