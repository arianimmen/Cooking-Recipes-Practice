import "./tailwind.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AboutUs from "./pages/AboutUs";
import CookingTips from "./pages/CookingTips";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="cookingtips" element={<CookingTips />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
