import React from 'react';
import {GrLocation,GrPhone,GrMail} from "react-icons/gr";

export default function FooterAddress() {
    return (
        
           
            <div className='flex flex-col mt-3 '>
            <p className='text-1xl font-bold uppercase '>Store Information</p>
          <div className='flex justify-start items-center '>
              <GrLocation  className='mr-3'/>
              <div>
                  <p className='text-xs m-2'>Pet Store</p>
                  <p className='text-xs m-2'>10 , Master Street</p>
                  <p className='text-xs m-2'>  Master State</p>
              </div>
              
          </div>
          <div className='flex justify-start items-center' >
              <GrPhone className='mr-3  '/>
              <p className='text-xs m-2'>1111111111</p>
          </div>
          <div className='flex justify-start items-center'>
              <GrMail className='mr-3'/>
              <p className='text-xs m-2'>pet-store@gmail.com</p>
          </div>
            </div>
            
  )
}
