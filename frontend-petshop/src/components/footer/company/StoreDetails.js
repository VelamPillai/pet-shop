import React from 'react';

export default function StoreDetails(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-[1rem] md:gap-[6rem] md:my-[3rem] md:flex-row">
      <img class="w-64" src={props.img} alt={props.title} />
      <div>
        <h2 className="font-bold">{props.title}</h2>
        <p>{props.street}</p>
        <p>{props.city}</p>
        <p>{props.country}</p>
        <p>{props.openingHours}</p>
      </div>
      <div>
        <p>{props.Monday}</p>
        <p>{props.Tuesday}</p>
        <p>{props.Wednesday}</p>
        <p>{props.Thursday}</p>
        <p>{props.Friday}</p>
        <p>{props.Saturday}</p>
        <p>{props.Sunday}</p>
      </div>
    </div>
  );
}
