import "./tailwind.css";
import Header from "./components/Header";
import RandomRecipes from "./components/RandomRecipes";

function App() {
  return (
    <div className=" bg-orange-50 w-full h-full">
      <div className="container mx-auto p-4">
        <Header />
        <HeroImage />
        <RandomRecipes />
      </div>
    </div>
  );
}

export default App;

function HeroImage() {
  return (
    <div className="relative mb-8">
      <div className="absolute flex flex-col items-center mx-auto w-full top-1/4  text-center text-white px-6 ">
        {/* Main Title */}
        <h1 className="text-3xl font-extrabold mb-3 md:text-7xl max-w-[900px]">
          Unleash Culinary Excellence
        </h1>
        {/* Description */}
        <p className="text-base font-light mb-10 md:text-xl">
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </p>
        {/* Button */}
        <button className="text-black bg-orange-400 py-2 px-6 rounded-3xl text-sm md:text-base">
          Explore More
        </button>
      </div>
      <img
        src="./src/assets/images/Hero  Section (1).png"
        className="w-full object-cover object-bottom h-[577px] rounded-3xl"
        alt="hero-image"
      />
    </div>
  );
}
