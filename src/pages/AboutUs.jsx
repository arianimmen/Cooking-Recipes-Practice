import RandomRecipes from "../components/RandomRecipes";

function AboutUs() {
  return (
    <>
      <AboutUsIntro />
      <RandomRecipes />
    </>
  );
}

export default AboutUs;

function AboutUsIntro() {
  return (
    <div className="mb-16 md:flex md:gap-x-5 md:items-end md:mt-24">
      <h1 className="text-4xl font-bold mt-16 mb-4 md:mb-0 md:mt-0 md:text-7xl">
        Welcome to my culinary heaven!
      </h1>
      <div>
        <p className="text-zinc-500 text-base mb-10 md:text-xl">
          Bonjour and welcome to the heart of my kitchen! I&apos;m Isabella
          Russo, the culinary enthusiast behind this haven of flavors, Cooks
          Delight. Join me on a gastronomic journey where each dish carries a
          story, and every recipe is a crafted symphony of taste.
        </p>
        <button className="px-6 py-3 bg-orange-400 rounded-3xl text-sm font-semibold">
          Explore Recipes
        </button>
      </div>
    </div>
  );
}
