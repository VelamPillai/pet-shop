import { petCategories } from "../../data.js";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <div>
      <div className="mt-24">
        <h4 className="text-center text-2xl font-semibold">Explore by Pet</h4>
        <p className="text-center mb-9 mt-5">
          There was a little dancing man but you can call him kettle and every
          day he goes for a jog from morning until dark.
        </p>
      </div>
      <div className="grid md:grid-cols-3 p-2 gap-8 sm:grid-cols-1">
        {petCategories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
