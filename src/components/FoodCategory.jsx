import FoodItem from "./FoodItem";

function FoodCategory() {
  return (
    <div>
      {/* title */}
      <div className="flex flex-col items-center mb-10">
        <span className="bg-red-400 text-white py-1 px-3 rounded-2xl text-sm mb-3 md:text-base">
          Recipes
        </span>
        <h2 className="text-2xl font-bold mb-3 md:text-4xl">
          Embark on a journey
        </h2>
        <p className="text-sm text-center md:text-base">
          With our diverse collection of recipes we have something to satisfy
          every palate.
        </p>
      </div>
      {/* Tags */}
      <ul className="flex flex-wrap gap-x-2 gap-y-4 justify-center mb-10">
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer bg-lime-300">All</li>
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer">Vegan</li>
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer">
          Berakfast
        </li>
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer">Lunch</li>
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer">Dinner</li>
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer">Desert</li>
        <li className="py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer">
          Quick Bite!
        </li>
      </ul>
      {/* Foods */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    </div>
  );
}

export default FoodCategory;
