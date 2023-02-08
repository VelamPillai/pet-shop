import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ title, menuItem }) {
  const navigate = useNavigate();

  const footerHandler = (e) => {
    if (e.currentTarget.textContent === "Legal Notice") {
      navigate("/products/legal-notice");
    } else if (e.currentTarget.textContent === "About Us") {
      navigate("/products/about-us");
    } else if (e.currentTarget.textContent === "Price Drop") {
      navigate("/products/price-drop");
    } else if (e.currentTarget.textContent === "New Products") {
      navigate("/products/new-products");
    } else if (e.currentTarget.textContent === "Best Sales") {
      navigate("/products/best-sales");
    } else if (e.currentTarget.textContent === "Delivery") {
      navigate("/company/delivery");
    } else if (e.currentTarget.textContent === "Secure Payment") {
      navigate("/company/secure-payment");
    } else if (e.currentTarget.textContent === "Contact Us") {
      navigate("/company/contact");
    } else if (e.currentTarget.textContent === "Sitemap") {
      navigate("/company/sitemap");
    } else if (e.currentTarget.textContent === "Stores") {
      navigate("/company/stores");
    }
  };

  return (
    <div>
      <p className="text-[16px]  sm:text-lg font-bold uppercase">{title}</p>
      <ul>
        {menuItem.map((item, idx) => {
          return (
            <li
              onClick={footerHandler}
              className="text-[16px]  sm:text-xs  sm:m-1 hover:cursor-pointer hover:text-yellow-600"
              key={idx}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
