function FoodItem() {
  return (
    <div className="bg-white bg-opacity-50 mb-6 rounded-3xl border border-zinc-300 w-full ">
      {/* Image */}
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-64 object-cover"
          src="https://img.spoonacular.com/recipes/716429-556x370.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-2xl"></div>
      </div>
      {/* Description */}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-3">Savory Herb-infused</h3>
        <p className="text-sm mb-10">
          Indulge in the rich and savory symphony of flavors with our Savory
          Herb-Infused Chicken
        </p>
        <div className="mb-4 flex text-xs font-bold">
          <div>
            <span>40 MIN - </span>
            <span>EASY PREP - </span>
            <span>3 SERVES</span>
          </div>
        </div>
        <button className="w-full border border-orange-950 rounded-3xl py-3">
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
