import FoodItem from "./FoodItem";

function RandomRecipes() {
  return (
    <div className="px-4 pt-10 border rounded-3xl border-zinc-300 mb-16">
      {/* Title */}
      <h2 className="font-bold text-2xl mb-6 pl-2 md:text-4xl">
        Random Recipes
      </h2>
      {/* Recipes Container */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        {/* Recipe 1 */}
        <FoodItem />
        {/* Recipe 2 */}
        <FoodItem />
      </div>
    </div>
  );
}

export default RandomRecipes;
