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
    <div className="flex justify-between items-center mt-3 flex-col md:flex-row">
      <Menu title="Products" menuItem={products} />
      <Menu title="Our Company" menuItem={company} />
      <FooterAddress />
    </div>
  );
}
