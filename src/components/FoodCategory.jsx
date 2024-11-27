// Importing necessary hooks and components
import { useEffect, useState } from "react"; // useEffect for side effects, useState for state management
import FoodItem from "./FoodItem"; // Component to display individual food items
import { useDispatch, useSelector } from "react-redux"; // Hooks for interacting with the Redux store
import { getAsyncCategoryFoods } from "../features/categoryFoods/categoryFoodsSlice.js"; // Thunk action to fetch category-specific foods
import { OrbitProgress } from "react-loading-indicators";
import Error from "./Error.jsx";

function FoodCategory() {
  // Local state to track the selected food type
  const [foodType, setFoodType] = useState("");

  // Extracting loading, foods, and error states from Redux store
  const { loading, foods, error } = useSelector((state) => state.categoryFoods);

  // Dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  // useEffect to fetch foods when the selected food type changes
  useEffect(() => {
    dispatch(getAsyncCategoryFoods({ number: 3, type: foodType })); // Fetches 3 recipes based on selected food type
  }, [dispatch, foodType]); // Dependency array ensures this effect runs when dispatch or foodType changes

  return (
    <div>
      {/* Title Section */}
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
      {/* Food Type Tags */}
      <ul className="flex flex-wrap gap-x-2 gap-y-4 justify-center mb-10">
        {/* Each list item allows the user to select a specific food type */}
        <li
          onClick={() => setFoodType("")} // Clears the food type filter
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "" ? "bg-lime-300" : ""
          }`}
        >
          All
        </li>
        <li
          onClick={() => setFoodType("vegetarian")} // Sets food type to "vegetarian"
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "vegetarian" ? "bg-lime-300" : ""
          }`}
        >
          Vegan
        </li>
        <li
          onClick={() => setFoodType("breakfast")} // Sets food type to "breakfast"
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "breakfast" ? "bg-lime-300" : ""
          }`}
        >
          Breakfast
        </li>
        <li
          onClick={() => setFoodType("main course")} // Sets food type to "main course"
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "main course" ? "bg-lime-300" : ""
          }`}
        >
          Lunch
        </li>
        <li
          onClick={() => setFoodType("salad")} // Sets food type to "salad"
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "salad" ? "bg-lime-300" : ""
          }`}
        >
          Salad
        </li>
        <li
          onClick={() => setFoodType("dessert")} // Sets food type to "dessert"
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "dessert" ? "bg-lime-300" : ""
          }`}
        >
          Dessert
        </li>
        <li
          onClick={() => setFoodType("snack")} // Sets food type to "snack"
          className={`py-3 px-6 border border-zinc-900 rounded-3xl cursor-pointer ${
            foodType === "snack" ? "bg-lime-300" : ""
          }`}
        >
          Quick Bite!
        </li>
      </ul>
      {/* Display Foods */}
      {loading ? (
        <div className="flex justify-center mb-10">
          <OrbitProgress color="#F67172" size="medium" text="" textColor="" />
        </div>
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="flex flex-col md:flex-row md:gap-x-4">
          {/* Mapping over the foods array to display each item */}
          {foods.map((item) => (
            <FoodItem {...item} key={item.id} /> // Passing food details as props to FoodItem component
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodCategory; // Exporting the component for use in other parts of the app
