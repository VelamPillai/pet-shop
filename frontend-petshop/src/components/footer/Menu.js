import React from 'react';

export default function Menu({ title, menuItem }) {
  return (
    <div>
      <p className="text-1xl font-bold uppercase">{title}</p>
      <ul>
        {menuItem.map((item, idx) => {
          return (
            <li className="text-xs m-2" key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
