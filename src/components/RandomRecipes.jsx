import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem"; // Importing the FoodItem component to display individual food items
import { useEffect } from "react"; // Importing useEffect hook for side effects
import { getAsyncRandomFoods } from "../features/randomFoods/randomFoodsSlice"; // Importing the async action to fetch random foods
import toast from "react-hot-toast/headless";

function RandomRecipes() {
  // Using useSelector to access the state of randomFoods from the Redux store
  const { loading, foods, error } = useSelector((state) => state.randomFoods);

  // Initializing the dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();

  // useEffect hook to fetch random foods when the component mounts
  useEffect(() => {
    dispatch(getAsyncRandomFoods({ number: 2, type: "" }));
  }, [dispatch]); // Dependency array ensures the effect runs only when dispatch is updated

  // If the loading state is true or there's an error, display an error message
  if (loading) {
    toast.error("This is an error!");
    return <div>error</div>;
  }
  if (error !== "") {
    return;
  }

  return (
    <div className="px-4 pt-10 border rounded-3xl border-zinc-300 mb-16">
      {/* Title section of the component */}
      <h2 className="font-bold text-2xl mb-6 pl-2 md:text-4xl">
        Random Recipes
      </h2>

      {/* Recipes container displaying food items in a flexible layout */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        {/* Mapping over foods array to display each FoodItem */}
        {foods.map((item) => (
          <FoodItem {...item} key={item.id} /> // Passing props to FoodItem component
        ))}
      </div>
    </div>
  );
}

export default RandomRecipes; // Exporting the component to be used in other parts of the app
