import React from "react";
import Categories from "../components/main/Categories";
import Products from "../components/main/Products";
import Slider from "../components/main/Slider";

export default function Home() {
  const slides = [
    {url: 'https://cdn.shopify.com/s/files/1/0625/5260/4904/files/1_e3ed3ae9-72a4-4fc5-975d-aabfaf67b6ab.png?v=1662641675&width=2072'},
    {url: 'https://cdn.shopify.com/s/files/1/0625/5260/4904/files/2_0eb0ab44-3c7a-4424-961c-117822d77728.png?v=1662641900&width=2072'}
  ]
  return (
    <div>
      <Slider slides={slides}/>
      <Categories />
      <Products />
      
    </div>
  );
}
