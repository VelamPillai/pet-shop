import React from 'react';
import mainImage from '../../image/mainImage.jpeg';
import PetCategory from './PetCategory';

export default function Main() {
  return (
    <div className="p-[3rem]">
      <img
        src={mainImage}
        alt="header-icon"
        className="w-2/3 rounded-md m-auto"
      />

      <PetCategory />
      <hr className="mb-[2rem]" />
    </div>
  );
}
