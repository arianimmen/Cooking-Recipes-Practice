// Importing necessary modules from Redux Toolkit for creating async thunks and slices
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Axios for making HTTP requests
import { apiKey } from "../../apiKey"; // Import the API key from a separate file

// Creating an Axios instance with a base URL for the Spoonacular API
const api = axios.create({ baseURL: "https://api.spoonacular.com" });

// Initial state for the randomFoods slice
const initialState = {
  foods: [], // Array to store fetched food recipes
  loading: false, // Boolean to track loading state during API calls
  error: "", // String to store any error messages from failed requests
};

// Async thunk for fetching random recipes from the Spoonacular API
export const getAsyncRandomFoods = createAsyncThunk(
  "randomFoods/getAsyncFoods", // Action type for the async thunk
  async ({ number, type }, { rejectWithValue }) => {
    try {
      // Making a GET request to fetch random recipes based on the number and type
      const response = await api.get(
        `/recipes/random?number=${number}&include-tags=${type}&apiKey=${apiKey}`
      );
      return response.data.recipes; // Return the recipes data on success
    } catch (error) {
      // Return the error message if the request fails
      return rejectWithValue(error.message);
    }
  }
);

// Creating a slice to manage the state for randomFoods
const randomFoodsSlice = createSlice({
  name: "randomFoods", // Name of the slice
  initialState, // Initial state defined above
  reducers: {}, // No synchronous reducers are defined for this slice
  extraReducers: (builder) => {
    // Handling different states of the async thunk
    builder
      .addCase(getAsyncRandomFoods.pending, (state) => {
        state.loading = true; // Set loading to true when the request starts
        state.foods = []; // Clear previous foods data
        state.error = ""; // Reset error message
      })
      .addCase(getAsyncRandomFoods.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request succeeds
        state.foods = action.payload; // Store fetched recipes in state
        state.error = ""; // Clear any error messages
      })
      .addCase(getAsyncRandomFoods.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the request fails
        state.foods = []; // Clear foods data on failure
        state.error = action.payload; // Store the error message
      });
  },
});

// Exporting the reducer function to be used in the Redux store
export default randomFoodsSlice.reducer;
