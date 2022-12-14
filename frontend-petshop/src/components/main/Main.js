import React from 'react';
import mainImage from '../../image/mainImage.jpeg';
import PetCategory from './PetCategory';

export default function Main() {
  return (
    <div>
      <img src={mainImage} alt="header-icon" className="w-full p-[3rem]" />
      <PetCategory />
      <hr  className='mb-[2rem]'/> 
    </div>
  )
}
