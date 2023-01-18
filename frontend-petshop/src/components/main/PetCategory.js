import React from 'react';

import dog from '../../image/dog.jpeg';
import cat from '../../image/cat.jpeg';
import bird from '../../image/bird.jpeg';
import reptile from '../../image/reptile.jpeg';
import PetCard from './PetCard';

export default function PetCategory() {
  return (
    <div>
      <p className="text-lg font-bold text-orange-600 pt-[3rem]">
        Pet Category
      </p>
      <hr className="my-[1rem]" />
      <div className="flex justify-around p-5">
        <PetCard image={dog} petName={'Dogs'} />
        <PetCard image={cat} petName={'Cats'} />
        <PetCard image={bird} petName={'Birds'} />
        <PetCard image={reptile} petName={'Reptiles'} />
      </div>
    </div>
  );
}
