// Importing necessary functions and libraries
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../apiKey"; // Importing API key securely from a separate file

// Setting up an Axios instance with a base URL for the Spoonacular API
const api = axios.create({ baseURL: "https://api.spoonacular.com" });

// Defining the initial state for the category foods slice
const initialState = {
  foods: [], // Holds the fetched food data
  loading: false, // Tracks the loading state of the API call
  error: "", // Stores error messages, if any
};

// Async thunk to fetch random foods based on the category
export const getAsyncCategoryFoods = createAsyncThunk(
  "categoryFoods/getAsyncFoods", // Action type
  async ({ number, type }, { rejectWithValue }) => {
    try {
      // Making a GET request to fetch random recipes with the given number and type
      const response = await api.get(
        `/recipes/random?number=${number}&include-tags=${type}&apiKey=${apiKey}`
      );
      return response.data.recipes; // Return the recipes data on success
    } catch (error) {
      // Reject with an error message if the request fails
      return rejectWithValue(error.message);
    }
  }
);

// Creating a slice for managing category foods data
const categoryFoodsSlice = createSlice({
  name: "categoryFoods", // Slice name
  initialState, // Initial state defined above
  extraReducers: (builder) => {
    // Handling the lifecycle states of the async thunk
    builder
      .addCase(getAsyncCategoryFoods.pending, (state) => {
        state.loading = true; // Set loading to true when the request starts
        state.foods = []; // Clear previous foods data
        state.error = ""; // Reset the error state
      })
      .addCase(getAsyncCategoryFoods.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request succeeds
        state.foods = action.payload; // Store the fetched recipes
        state.error = ""; // Ensure error is cleared
      })
      .addCase(getAsyncCategoryFoods.rejected, (state, action) => {
        state.loading = false; // Stop loading when the request fails
        state.foods = []; // Clear the foods data as the request failed
        state.error = action.payload; // Store the error message for debugging or display
      });
  },
});

// Exporting the reducer to be used in the Redux store
export default categoryFoodsSlice.reducer;
