export default function CategoryItem({ item }) {
  return (
    <div>
      <img className="w-full object-cover " src={item.img} alt="cat-img"></img>
      <div>
        <h4 className="text-center mt-2 text-xl font-semibold">{item.title}</h4>
      </div>
    </div>
  );
}
