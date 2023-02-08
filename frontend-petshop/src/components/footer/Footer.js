import React from 'react';
import CopyRights from './CopyRights';
import FooterMenu from './FooterMenu';
import Newsletter from './NewsLetter';
export default function Footer() {
  return (
    <div className='p-[2rem] box-border w-[100%] '>
      <Newsletter />
      <FooterMenu  />
      <hr className="mt-3 pt-[1rem]" />
      <CopyRights />
    </div>
  );
}
