import React from 'react'

import cardImage from '../../image/dog.jpeg';


export default function ProductCard({product}) {



  return (
      <div className='flex flex-col border w-[250px] box-border rounded-lg p-4 mb-3'>
          <img src={cardImage} alt='card-pic' className='w-[100%] h-[200px] mb-3'/>
          <p className='text-sm  text-gray-500'>{product.brand} - {product.petName}</p>
          <p className='font-bold text-lg mb-1'>{product.productName}</p>
          <p></p>
          <p className='border w-[100%] flex justify-center items-center rounded-lg bg-orange-100 '>$ {product.price}</p>

          
    </div>
  )
}
