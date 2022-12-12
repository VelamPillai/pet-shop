import React from 'react'
import CopyRights from './CopyRights'

import FooterMenu from './FooterMenu'
import Newsletter from './NewsLetter'

export default function Footer() {
  return (
      <div>
          
          <Newsletter />
      <FooterMenu />
      <hr className='mt-3' />
      <CopyRights />
         
    </div>
  )
}
