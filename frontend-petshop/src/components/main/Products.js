import { productsOfWeek } from "../../data.js";
import Product from "./Product";

export default function Products() {
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
      <div className="grid md:grid-cols-3 gap-3 p-2 sm:grid-cols-1 mb-5 gap-y-16">
        {productsOfWeek.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
