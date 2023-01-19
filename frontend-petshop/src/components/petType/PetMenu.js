import React from 'react'

export default function PetMenu() {

  const dogMenu = [
    "Dog Food",
    "Dog Pharmacy",
    "Dog Toys",
    "Dog Treats and Bones",
    "Dog Homes",
    "care and Maintenance",
    "Supplements",
  ];

  return (
      <div>
          <ul className="flex flex-row justify-between m-3">
          {dogMenu.map((item, idx) => {
            return (
              <li
                key={idx}
                className="p-2  ring-2 ring-orange-500 rounded bg-orange-200/25 hover:ring-green-500 hover:bg-green-100/25"
              >
                {item}
              </li>
            );
          })}
          </ul>
    </div>
  )
}
