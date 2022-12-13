import React from 'react';
import FooterAddress from './FooterAddress';
import Menu from './Menu';

export default function FooterMenu() {
  const products = [
    'Legal Notice',
    'About Us',
    'Price drop',
    'New Products',
    'Best sales',
  ];
  const company = [
    'Delivery',
    'Secure payment',
    'Contact us',
    'Sitemap',
    'Stores',
  ];
  return (
    <div className="flex justify-between items-center mt-3">
      <Menu title="Products" menuItem={products} />
      <Menu title="Our Company" menuItem={company} />
      <FooterAddress />
    </div>
  );
}
