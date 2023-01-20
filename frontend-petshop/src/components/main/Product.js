import { HiPlusSm } from "react-icons/hi";

export default function Product({ item }) {
  return (
    <div className="flex">
      <img
        src={item.img}
        alt="product-img"
        className="w-1/2 object-cover"
      ></img>
      <div className="py-2 pl-4">
        <span className="text-xs text-gray-500">{item.brand}</span>
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <h3 className="text-lg font-medium my-3">{item.price}</h3>
        <p className="text-sm">{item.desc}</p>
        <button className="mt-4 border-2 p-2 flex justify-center items-center px-2 rounded">
          <HiPlusSm className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
