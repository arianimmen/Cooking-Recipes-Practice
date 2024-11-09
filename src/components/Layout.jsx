import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className=" bg-orange-50 w-full h-full">
      <div className="container mx-auto p-4 max-w-screen-2xl">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
