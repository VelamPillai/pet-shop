import React from 'react'
import FooterAddress from './FooterAddress';


import Menu from './Menu';

export default function FooterMenu() {
    const products = ['legal Notice', 'About Us' ,'price drop','New products','Best Sales'];
    const company = ['Delivery','Secure payment','contact us','sitemap','stores']
  return (
      <div className='flex justify-between items-center mt-3 ' >
          <Menu title ='Products' menuItem={products} /> 
          <Menu title='our Company' menuItem={company} />
         <FooterAddress  />
    </div>
  )
}
