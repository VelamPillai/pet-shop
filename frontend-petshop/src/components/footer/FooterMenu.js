import React from 'react';
import FooterAddress from './FooterAddress';
import Menu from './Menu';

export default function FooterMenu() {
  const products = [
    'Legal Notice',
    'About Us',
    'Price Drop',
    'New Products',
    'Best Sales',
  ];
  const company = [
    'Delivery',
    'Secure Payment',
    'Contact Us',
    'Sitemap',
    'Stores',
  ];
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-3  ">
        <Menu title="Products" menuItem={products} />
      <Menu title="Our Company" menuItem={company} />
     
      <FooterAddress />
    </div>
  );
}
