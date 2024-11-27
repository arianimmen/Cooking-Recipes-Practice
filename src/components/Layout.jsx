import { Outlet } from "react-router-dom"; // Importing Outlet to render nested routes in the layout
import Footer from "./Footer"; // Importing Footer component to be displayed at the bottom
import Header from "./Header"; // Importing Header component to be displayed at the top

function Layout() {
  return (
    <div className=" bg-orange-50 w-full h-full">
      {/* Container for the layout with responsive padding and max width */}
      <div className="container mx-auto p-4 max-w-screen-2xl">
        <Header /> {/* Header section displayed at the top */}
        {/* The Outlet component will render the matched child route component */}
        <Outlet />
        <Footer /> {/* Footer section displayed at the bottom */}
      </div>
    </div>
  );
}

export default Layout; // Exporting the Layout component to be used as a wrapper for the page content
