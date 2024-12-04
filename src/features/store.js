// Importing the configureStore function from Redux Toolkit for setting up the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Importing the reducers for managing state slices
import randomFoodsSliceReducer from "./randomFoods/randomFoodsSlice"; // Reducer for randomFoods slice
import categoryFoodsSliceReducer from "./categoryFoods/categoryFoodsSlice"; // Reducer for categoryFoods slice
import singleFoodSliceReducer from "./singleRecipe/singleRecipe";

// Configuring the Redux store
const store = configureStore({
  reducer: {
    randomFoods: randomFoodsSliceReducer, // Key for the randomFoods state managed by its reducer
    categoryFoods: categoryFoodsSliceReducer, // Key for the categoryFoods state managed by its reducer
    singleRecipFood: singleFoodSliceReducer,
  },
});

// Exporting the configured store for use throughout the application
export default store;
