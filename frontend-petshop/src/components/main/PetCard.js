import React from 'react'



export default function PetCard({image ,petName}) {
  return (
      <div className='flex flex-col justify-center items-center'>
          <img src={image} alt={`${petName}`} className="w-[200px] h-[200px]  rounded-full border-2 border-orange-600 mb-5 hover:scale-95 hover:-rotate-45" />
          <p>{petName}</p>
    </div>
  )
}
