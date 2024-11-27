import "./tailwind.css"; // Importing Tailwind CSS styles for styling the app

import { Route, Routes } from "react-router-dom"; // Importing Route and Routes components from react-router-dom for routing
import Layout from "./components/Layout"; // Importing Layout component for the main layout of the app
import Home from "./pages/Home"; // Importing the Home page component
import Recipes from "./pages/Recipes"; // Importing the Recipes page component
import AboutUs from "./pages/AboutUs"; // Importing the About Us page component
import CookingTips from "./pages/CookingTips"; // Importing the Cooking Tips page component

// Main App component: responsible for rendering the routes and layout of the application
function App() {
  return (
    <div>
      <Routes>
        {/* Routes component to define all the available routes in the app */}
        <Route path="/" element={<Layout />}>
          {/* The root route renders the Layout component */}
          {/* Defining nested routes within the Layout component */}
          <Route index element={<Home />} /> {/* Default route (home page) */}
          <Route path="recipes" element={<Recipes />} />
          {/* Route for the Recipes page */}
          <Route path="cookingtips" element={<CookingTips />} />
          {/* Route for the Cooking Tips page */}
          <Route path="aboutus" element={<AboutUs />} />
          {/* Route for the About Us page */}
        </Route>
      </Routes>
    </div>
  );
}

export default App; // Exporting App component for use in other parts of the application
