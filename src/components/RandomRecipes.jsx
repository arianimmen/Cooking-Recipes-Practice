function RandomRecipes() {
  return (
    <div className="px-4 pt-10 border rounded-3xl border-zinc-300 ">
      {/* Title */}
      <h2 className="font-bold text-2xl mb-6 pl-2 md:text-4xl">
        Random Recipes
      </h2>
      {/* Recipes Container */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        {/* Recipe 1 */}
        <div className="bg-white bg-opacity-50 mb-6 rounded-3xl border border-zinc-300 w-full ">
          {/* Image */}
          <div className="relative">
            <img
              className="rounded-t-2xl w-full h-64 object-cover"
              src="https://img.spoonacular.com/recipes/715538-556x370.jpg"
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
        {/* Recipe 2 */}
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
      </div>
    </div>
  );
}

export default RandomRecipes;
