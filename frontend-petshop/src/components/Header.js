import React from 'react'
import Logo from '../image/header-icon.png';

export default function Header(){
  return (
    <div  className="text-4xl font-bold flex ">
          <img src={Logo} alt='header-icon' />
          <div className=''> <p className=''>Pet </p>
          <p className=''>Store</p> </div>
         
    </div>
  )
}

