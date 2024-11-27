import RandomRecipes from "../components/RandomRecipes"; // Import the RandomRecipes component to display random recipes

// Main AboutUs component
function AboutUs() {
  return (
    <>
      <AboutUsIntro /> {/* Displays the introductory section */}
      <AboutUsMain /> {/* Displays the main content about the author */}
      <RandomRecipes /> {/* Displays random recipes component */}
    </>
  );
}

export default AboutUs;

// Component for the introductory section of About Us
function AboutUsIntro() {
  return (
    <div className="mb-16 md:flex md:gap-x-5 md:items-end md:mt-24 px-4">
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

// Main content section of About Us, including author image and social media links
function AboutUsMain() {
  return (
    <div className="p-4 border rounded-3xl border-zinc-300 mb-16">
      {/* Top section of AboutUsMain */}
      <div className="mb-10 md:flex md:gap-x-10 md:mb-16">
        {/* Section for the author's image */}
        <div className="mb-10">
          <img
            src="./src/assets/images/Author Image.png" // Author image source
            alt="author images" // Alt text for the image
            className="rounded-xl w-full md:h-full md:object-cover" // Responsive styling for the image
          />
          {/* Social media section */}
          <div className="px-6 py-3 border border-zinc-900 rounded-3xl flex justify-between mt-4 ">
            <span className="text-sm">FOLLOW ME</span>
            {/* Social media icons */}
            <div className="flex items-center gap-x-3">
              {/* Facebook Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4024 18V11.0344H14.7347L15.0838 8.3265H12.4024V6.59765C12.4024 5.81364 12.62 5.27934 13.7443 5.27934L15.1783 5.27867V2.85676C14.9302 2.82382 14.0791 2.75006 13.0888 2.75006C11.0213 2.75006 9.606 4.01198 9.606 6.32952V8.3265H7.2677V11.0344H9.606V18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H12.4024Z"
                  fill="#262522"
                />
              </svg>
              {/* Instagram Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0281 0.000732422C12.1535 0.00259242 12.7238 0.00855245 13.2166 0.0232224L13.4107 0.0295625C13.6349 0.0375325 13.8561 0.0475324 14.1228 0.0600324C15.1869 0.109202 15.9128 0.277532 16.5503 0.525032C17.2094 0.779202 17.7661 1.12253 18.3219 1.67837C18.8769 2.2342 19.2203 2.79253 19.4753 3.45003C19.7219 4.0867 19.8903 4.81337 19.9403 5.87753C19.9522 6.1442 19.9618 6.3654 19.9697 6.58964L19.976 6.78373C19.9906 7.27647 19.9973 7.84686 19.9994 8.9723L20.0002 9.7179C20.0003 9.809 20.0003 9.903 20.0003 10L20.0002 10.2821L19.9996 11.0278C19.9977 12.1532 19.9918 12.7236 19.9771 13.2163L19.9707 13.4104C19.9628 13.6347 19.9528 13.8559 19.9403 14.1225C19.8911 15.1867 19.7219 15.9125 19.4753 16.55C19.2211 17.2092 18.8769 17.7659 18.3219 18.3217C17.7661 18.8767 17.2069 19.22 16.5503 19.475C15.9128 19.7217 15.1869 19.89 14.1228 19.94C13.8561 19.9519 13.6349 19.9616 13.4107 19.9694L13.2166 19.9757C12.7238 19.9904 12.1535 19.997 11.0281 19.9992L10.2824 20C10.1913 20 10.0973 20 10.0003 20H9.7182L8.9725 19.9993C7.8471 19.9975 7.27672 19.9915 6.78397 19.9768L6.58989 19.9705C6.36564 19.9625 6.14444 19.9525 5.87778 19.94C4.81361 19.8909 4.08861 19.7217 3.45028 19.475C2.79194 19.2209 2.23444 18.8767 1.67861 18.3217C1.12278 17.7659 0.780277 17.2067 0.525277 16.55C0.277777 15.9125 0.110277 15.1867 0.0602767 14.1225C0.0483967 13.8559 0.0387066 13.6347 0.0308566 13.4104L0.0245667 13.2163C0.00993665 12.7236 0.00326674 12.1532 0.00110674 11.0278L0.000976562 8.9723C0.00283656 7.84686 0.00878657 7.27647 0.0234566 6.78373L0.0298066 6.58964C0.0377766 6.3654 0.0477767 6.1442 0.0602767 5.87753C0.109437 4.81253 0.277777 4.08753 0.525277 3.45003C0.779437 2.7917 1.12278 2.2342 1.67861 1.67837C2.23444 1.12253 2.79278 0.780032 3.45028 0.525032C4.08778 0.277532 4.81278 0.110032 5.87778 0.0600324C6.14444 0.0481624 6.36564 0.0381424 6.58989 0.0247024L6.78397 0.0232224C7.27672 0.00855245 7.8471 0.00259242 8.9725 0.000732422H9.7182L10.0003 0L10.1913 0.000732422C11.186 0.000732422 12.01 0.000732422 12.01 0.000732422C11.0281 0.000732422 12.01 0.000732422 12.01 0.000732422Z"
                  fill="#262522"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Section for the author's bio */}
        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl font-semibold text-zinc-700 mb-5">
            About Me
          </h3>
          <p className="text-zinc-500 text-sm leading-7 mb-10 md:text-base">
            Hello! I’m Isabella Russo, a passionate cook and recipe developer
            with a love for crafting dishes that bring comfort and joy. I
            started Cooks Delight to share my love of food with the world, and I
            believe food is meant to be an experience, not just a meal.
          </p>
          {/* Author's contact information or further details */}
          <button className="px-6 py-3 bg-orange-400 rounded-3xl text-sm font-semibold">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
