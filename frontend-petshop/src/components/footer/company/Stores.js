import React from 'react';
import StoreDetails from './StoreDetails';
import Store1 from '../../../image/store1.jpeg';
import Store2 from '../../../image/store2.jpeg';
import Store3 from '../../../image/store3.jpeg';
import Store4 from '../../../image/store4.jpeg';
import Store5 from '../../../image/store5.jpeg';

export default function Stores() {
  return (
    <div className="flex flex-col justify-center items-center md:mt-[5rem]">
      <h1 className="text-3xl font-bold my-[1rem]">Our stores</h1>
      <StoreDetails
        img={Store1}
        title={'Store Nr. 1'}
        street={'Wilhelm-Leuschner-Str. 2'}
        city={'28329, Bremen'}
        country={'Germany'}
        Monday={'Monday: 08:00-20:00'}
        Tuesday={'Tuesday: 08:00-20:00'}
        Wednesday={'Wednesday: 08:00-20:00'}
        Thursday={'Thursday: 08:00-20:00'}
        Friday={'Friday: 08:00-20:00'}
        Saturday={'Saturday: 10:00-20:00'}
        Sunday={'Sunday: Closed'}
      />

      <StoreDetails
        img={Store2}
        title={'Store Nr. 1'}
        street={'Wilhelm-Leuschner-Str. 2'}
        city={'28329, Bremen'}
        country={'Germany'}
        Monday={'Monday: 08:00-20:00'}
        Tuesday={'Tuesday: 08:00-20:00'}
        Wednesday={'Wednesday: 08:00-20:00'}
        Thursday={'Thursday: 08:00-20:00'}
        Friday={'Friday: 08:00-20:00'}
        Saturday={'Saturday: 10:00-20:00'}
        Sunday={'Sunday: Closed'}
      />
      <StoreDetails
        img={Store3}
        title={'Store Nr. 1'}
        street={'Wilhelm-Leuschner-Str. 2'}
        city={'28329, Bremen'}
        country={'Germany'}
        Monday={'Monday: 08:00-20:00'}
        Tuesday={'Tuesday: 08:00-20:00'}
        Wednesday={'Wednesday: 08:00-20:00'}
        Thursday={'Thursday: 08:00-20:00'}
        Friday={'Friday: 08:00-20:00'}
        Saturday={'Saturday: 10:00-20:00'}
        Sunday={'Sunday: Closed'}
      />
      <StoreDetails
        img={Store4}
        title={'Store Nr. 1'}
        street={'Wilhelm-Leuschner-Str. 2'}
        city={'28329, Bremen'}
        country={'Germany'}
        Monday={'Monday: 08:00-20:00'}
        Tuesday={'Tuesday: 08:00-20:00'}
        Wednesday={'Wednesday: 08:00-20:00'}
        Thursday={'Thursday: 08:00-20:00'}
        Friday={'Friday: 08:00-20:00'}
        Saturday={'Saturday: 10:00-20:00'}
        Sunday={'Sunday: Closed'}
      />
      <StoreDetails
        img={Store5}
        title={'Store Nr. 1'}
        street={'Wilhelm-Leuschner-Str. 2'}
        city={'28329, Bremen'}
        country={'Germany'}
        Monday={'Monday: 08:00-20:00'}
        Tuesday={'Tuesday: 08:00-20:00'}
        Wednesday={'Wednesday: 08:00-20:00'}
        Thursday={'Thursday: 08:00-20:00'}
        Friday={'Friday: 08:00-20:00'}
        Saturday={'Saturday: 10:00-20:00'}
        Sunday={'Sunday: Closed'}
      />
    </div>
  );
}
