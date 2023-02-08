import { useContext } from "react";

import ProductCard from "../petType/ProductCard";

import { StoreContext } from "../../context/StoreContext.js";

export default function Products() {
  const { productState } = useContext(StoreContext);
  const { product } = productState;

  return (
    <div>
      <div className="mt-24">
        <h4 className="text-center text-2xl font-semibold">
          Top Products of the Week
        </h4>
        <p className="text-center mb-9 mt-5">
          There was a little dancing man but you can call him kettle and every
          day he goes for a jog from morning until dark.
        </p>
      </div>
      <div className="grid  sm:grid-cols-4 gap-3 p-2 grid-cols-1 mb-5 gap-y-6 ">
        {product &&
          product
            .filter((item) => item.productArrival === "new")
            .slice(0, 8)
            .map((item) => (
              <ProductCard product={{ ...item }} key={item._id} />
            ))}
      </div>
    </div>
  );
}
