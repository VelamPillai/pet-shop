import {  HiOutlineHeart, HiOutlineSearch, HiOutlineShoppingBag, HiPlusSm } from "react-icons/hi";





export default function Product({ product }) {
  
  return (
    <div className="flex relative">
      <div className="w-1/2">
        <img
          src={product.productImage}
          alt="product-img"
          className="w-full object-cover"
        ></img>
        <div className="absolute top-0 left-10 opacity-0 hover:opacity-100">
          <div><HiOutlineHeart className="text-xl my-2 text-gray-500 hover:scale-110 cursor-pointer transition duration-[0.5ms] ease-in"/></div>
          <div><HiOutlineShoppingBag className="text-xl my-2 text-gray-500 hover:scale-110 cursor-pointer transition duration-[0.5ms] ease-in"/></div>
          <div><HiOutlineSearch className="text-xl my-2 text-gray-500 hover:scale-110 cursor-pointer transition duration-[0.5ms] ease" /></div>
        
     
        </div>
      </div>
      
      <div className="py-2 pl-4 w-1/2">
        <span className="text-xs text-gray-500">{product.brand}</span>
        <h4 className="text-lg font-semibold">{product.productName}</h4>
        <h3 className="text-lg font-medium my-3">{product.price}</h3>
        <p className="text-sm">{product.description}</p>
        <button className="mt-4 border-2 p-2 flex justify-center items-center px-2 rounded">
          <HiPlusSm className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
