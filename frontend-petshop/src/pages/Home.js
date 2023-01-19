import React from "react";
import Categories from "../components/main/Categories";
import Products from "../components/main/Products";
import Slider from "../components/main/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      
    </div>
  );
}
