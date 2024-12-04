import { Link } from "react-router-dom";  // Importing Link component from react-router-dom for navigation
import FoodCategory from "../components/FoodCategory"; // Importing FoodCategory component
import RandomRecipes from "../components/RandomRecipes"; // Importing RandomRecipes component

// Home component: the main page structure, including hero image, random recipes, food categories, and about us sections.
function Home() {
  return (
    <>
      <HeroImage />  {/* Hero section with title, description, and button */}
      <RandomRecipes />  {/* Displays random recipes */}
      <FoodCategory />  {/* Displays food categories */}
      <AboutUs />  {/* About Us section providing details about the website */}
    </>
  );
}

export default Home;  // Exporting Home component for use in other parts of the app

// HeroImage component: displays a hero image with a title, description, and an action button
function HeroImage() {
  return (
    <div className="relative mb-8">
      {/* Container for the hero content with absolute positioning */}
      <div className="absolute flex flex-col items-center mx-auto w-full top-1/4 text-center text-white px-6 ">
        {/* Main Title */}
        <h1 className="text-3xl font-extrabold mb-3 md:text-7xl max-w-[900px]">
          Unleash Culinary Excellence
        </h1>
        {/* Description */}
        <p className="text-base font-light mb-10 md:text-xl">
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </p>
        {/* Button to explore more */}
        <button className="text-black bg-orange-400 py-2 px-6 rounded-3xl text-sm md:text-base">
          Explore More
        </button>
      </div>
      {/* Hero image displayed as background */}
      <img
        src="/images/Hero  Section (1).png"  // Image source
        className="w-full object-cover object-bottom h-[577px] rounded-3xl"
        alt="hero-image"  // Alt text for the image
      />
    </div>
  );
}

// AboutUs component: section describing the website's journey and culinary philosophy
function AboutUs() {
  return (
    <div className="px-4 pt-11 pb-2 border rounded-3xl border-zinc-300 mb-16 gap-y-4 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-2 lg:gap-y-2">
      {/* Text block with content */}
      <div className="lg:flex lg:gap-x-6 lg:items-center">
        <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0 lg:flex-grow lg:max lg:pl-2">
          <span className="bg-red-400 text-white py-1 px-3 rounded-2xl text-sm mb-3 lg:text-base">
            About Us
          </span>
          {/* Heading for the about us section */}
          <h2 className="text-2xl font-bold mb-3 lg:text-5xl">
            Our Culinary Chronicle
          </h2>
          {/* Short description of the journey */}
          <p className="text-sm text-center lg:text-base lg:text-start text-zinc-400 lg:mb-4 lg:max-w-96">
            Our journey is crafted with dedication, creativity, and an
            unrelenting...{" "}
          </p>
          {/* Link to the detailed About Us page */}
          <Link
            to={"aboutus"}  // Navigation link to "aboutus" route
            className="hidden xl:block py-3 px-6 border border-zinc-900 rounded-3xl"
          >
            Read more
          </Link>
        </div>

        {/* Image 1 in the about us section */}
        <img
          className="h-72 w-full object-cover rounded-2xl lg:h-full lg:w-auto overflow-hidden"
          src="/images/Recipe Card.png"  // Image source
          alt=""  // Alt text for the image
        />
      </div>

      {/* Image 2 */}
      <div className="lg:order-2">
        <img
          className="h-72 w-full object-cover rounded-2xl lg:h-full lg:w-auto "
          src="/images/Recipe Card (1).png"  // Image source
          alt=""  // Alt text for the image
        />
      </div>

      {/* Image 3 (large image spanning two rows) */}
      <div className="row-span-2 lg:order-1 ">
        <img
          className="h-72 w-full object-cover rounded-2xl lg:h-[680px] lg:w-full lg:object-top "
          src="/images/About us Image.png"  // Image source
          alt=""  // Alt text for the image
        />
      </div>
    </div>
  );
}
