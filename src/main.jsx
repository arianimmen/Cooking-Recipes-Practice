import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./features/store.js";
import "./index.css"; // Importing Tailwind CSS styles for styling the app

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Toaster />
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
