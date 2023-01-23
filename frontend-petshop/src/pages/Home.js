
import React from "react";
import Categories from "../components/main/Categories";
import Products from "../components/main/Products";
import Slider from "../components/main/Slider";
import Welcome from "../components/main/Welcome";


export default function Home() {
  const slides = [
    {url: 'https://cdn.shopify.com/s/files/1/0625/5260/4904/files/1_e3ed3ae9-72a4-4fc5-975d-aabfaf67b6ab.png?v=1662641675&width=2072'},
    {url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {url: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'},
    {url: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'},
  ]

  return (
    <div>
      <div className="w-full h-[70vh] my-0 mx-auto mt-[3rem]" ><Slider slides={slides}/></div>
      <Welcome />
      <Categories />
      <Products />
    </div>
  );
}
