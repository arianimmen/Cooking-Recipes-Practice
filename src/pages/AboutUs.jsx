import RandomRecipes from "../components/RandomRecipes";

function AboutUs() {
  return (
    <>
      <AboutUsIntro />
      <AboutUsMain />
      <RandomRecipes />
    </>
  );
}

export default AboutUs;

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

function AboutUsMain() {
  return (
    <div className="p-4 border rounded-3xl border-zinc-300 mb-16">
      {/* AboutUsMain-top */}
      <div className="mb-10 md:flex md:gap-x-10 md:mb-16">
        {/* AboutUsMain__top__Image */}
        <div className="mb-10">
          <img
            src="./src/assets/images/Author Image.png"
            alt="author images"
            className="rounded-xl w-full md:h-full md:object-cover"
          />
          {/* social media */}
          <div className="px-6 py-3 border border-zinc-900 rounded-3xl flex justify-between mt-4 ">
            <span className="text-sm">FOLLOW ME</span>
            {/* icons */}
            <div className="flex items-center gap-x-3">
              {/* Facebook Logo */}
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
              {/* Instagram Logo */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0281 0.000732422C12.1535 0.00259242 12.7238 0.00855245 13.2166 0.0232224L13.4107 0.0295625C13.6349 0.0375325 13.8561 0.0475324 14.1228 0.0600324C15.1869 0.109202 15.9128 0.277532 16.5503 0.525032C17.2094 0.779202 17.7661 1.12253 18.3219 1.67837C18.8769 2.2342 19.2203 2.79253 19.4753 3.45003C19.7219 4.0867 19.8903 4.81337 19.9403 5.87753C19.9522 6.1442 19.9618 6.3654 19.9697 6.58964L19.976 6.78373C19.9906 7.27647 19.9973 7.84686 19.9994 8.9723L20.0002 9.7179C20.0003 9.809 20.0003 9.903 20.0003 10L20.0002 10.2821L19.9996 11.0278C19.9977 12.1532 19.9918 12.7236 19.9771 13.2163L19.9707 13.4104C19.9628 13.6347 19.9528 13.8559 19.9403 14.1225C19.8911 15.1867 19.7219 15.9125 19.4753 16.55C19.2211 17.2092 18.8769 17.7659 18.3219 18.3217C17.7661 18.8767 17.2069 19.22 16.5503 19.475C15.9128 19.7217 15.1869 19.89 14.1228 19.94C13.8561 19.9519 13.6349 19.9616 13.4107 19.9694L13.2166 19.9757C12.7238 19.9904 12.1535 19.997 11.0281 19.9992L10.2824 20C10.1913 20 10.0973 20 10.0003 20H9.7182L8.9725 19.9993C7.8471 19.9975 7.27672 19.9915 6.78397 19.9768L6.58989 19.9705C6.36564 19.9625 6.14444 19.9525 5.87778 19.94C4.81361 19.8909 4.08861 19.7217 3.45028 19.475C2.79194 19.2209 2.23444 18.8767 1.67861 18.3217C1.12278 17.7659 0.780277 17.2067 0.525277 16.55C0.277777 15.9125 0.110277 15.1867 0.0602767 14.1225C0.0483967 13.8559 0.0387066 13.6347 0.0308566 13.4104L0.0245667 13.2163C0.00993665 12.7236 0.00326674 12.1532 0.00110674 11.0278L0.000976562 8.9723C0.00283656 7.84686 0.00878657 7.27647 0.0234566 6.78373L0.0298066 6.58964C0.0377766 6.3654 0.0477767 6.1442 0.0602767 5.87753C0.109437 4.81253 0.277777 4.08753 0.525277 3.45003C0.779437 2.7917 1.12278 2.2342 1.67861 1.67837C2.23444 1.12253 2.79278 0.780032 3.45028 0.525032C4.08778 0.277532 4.81278 0.110032 5.87778 0.0600324C6.14444 0.0481624 6.36564 0.0384725 6.58989 0.0306225L6.78397 0.0243323C7.27672 0.00969229 7.8471 0.00302236 8.9725 0.00086236L11.0281 0.000732422ZM10.0003 5.00003C7.23738 5.00003 5.00028 7.23956 5.00028 10C5.00028 12.7629 7.23981 15 10.0003 15C12.7632 15 15.0003 12.7605 15.0003 10C15.0003 7.23713 12.7607 5.00003 10.0003 5.00003ZM10.0003 7.00003C11.6572 7.00003 13.0003 8.3427 13.0003 10C13.0003 11.6569 11.6576 13 10.0003 13C8.3434 13 7.00028 11.6574 7.00028 10C7.00028 8.3431 8.3429 7.00003 10.0003 7.00003ZM15.2503 3.50003C14.561 3.50003 14.0003 4.05994 14.0003 4.74918C14.0003 5.43843 14.5602 5.9992 15.2503 5.9992C15.9395 5.9992 16.5003 5.4393 16.5003 4.74918C16.5003 4.05994 15.9386 3.49917 15.2503 3.50003Z"
                  fill="#262522"
                />
              </svg>
              {/* Youtube Logo */}
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2439 0C10.778 0.00294 12.1143 0.0158601 13.5341 0.0727301L14.0375 0.0946798C15.467 0.16236 16.8953 0.27798 17.6037 0.4755C18.5486 0.74095 19.2913 1.5155 19.5423 2.49732C19.942 4.05641 19.992 7.0994 19.9982 7.8358L19.9991 7.9884V7.9991C19.9991 7.9991 19.9991 8.0028 19.9991 8.0099L19.9982 8.1625C19.992 8.8989 19.942 11.9419 19.5423 13.501C19.2878 14.4864 18.5451 15.261 17.6037 15.5228C16.8953 15.7203 15.467 15.8359 14.0375 15.9036L13.5341 15.9255C12.1143 15.9824 10.778 15.9953 10.2439 15.9983L10.0095 15.9991H9.9991C9.9991 15.9991 9.9956 15.9991 9.9887 15.9991L9.7545 15.9983C8.6241 15.9921 3.89772 15.941 2.39451 15.5228C1.4496 15.2573 0.70692 14.4828 0.45587 13.501C0.0561999 11.9419 0.00624 8.8989 0 8.1625V7.8358C0.00624 7.0994 0.0561999 4.05641 0.45587 2.49732C0.7104 1.51186 1.45308 0.73732 2.39451 0.4755C3.89772 0.0572301 8.6241 0.00622 9.7545 0H10.2439ZM7.99911 4.49914V11.4991L13.9991 7.9991L7.99911 4.49914Z"
                  fill="#262522"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* AboutUsMain__top__Text */}
        <div className="text-sm md:text-base text-zinc-500 flex flex-col gap-y-4 md:w-fit md:pt-4 md:py-6">
          <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
            From Italian Roots to Global Palates
          </h2>
          <p>
            Born and raised in the vibrant culinary landscape of Italy, my
            journey with food began in the heart of my family&apos;s kitchen.
            Surrounded by the aroma of fresh herbs, the sizzle of pans, and the
            laughter of loved ones, I developed a deep appreciation for the art
            of cooking. My culinary education took me from the historic streets
            of Rome to the bustling markets of Florence, where I honed my skills
            and cultivated a love for the simplicity and authenticity of Italian
            cuisine.
          </p>
          <p>
            Driven by a relentless curiosity, I embarked on a global culinary
            exploration, seeking inspiration from the rich tapestry of flavors
            found in kitchens around the world. From the spicy markets of
            Marrakech to the sushi stalls of Tokyo, each experience added a
            unique brushstroke to my culinary canvas.
          </p>
          <p>
            Whether you&apos;re a seasoned home cook or just starting your
            culinary adventure, I&apos;m delighted to have you here. Let&apos;s
            stir, simmer, and savor the beauty of creating something wonderful
            together.
          </p>
          <p>Warmest regards</p>
        </div>
      </div>
      {/* AboutUsMain-bottom */}
      <div className="flex flex-col gap-y-4 md:grid grid-cols-4 grid-rows-2 md:gap-x-4 md:gap-y-6">
        <img
          src="./src/assets/images/Image (1).png"
          alt="image1"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image (2).png"
          alt="image2"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image (3).png"
          alt="image3"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image (4).png"
          alt="image4"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image.png"
          alt="image5"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image (5).png"
          alt="image6"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image (6).png"
          alt="image7"
          className="md:w-full"
        />
        <img
          src="./src/assets/images/Image (7).png"
          alt="image8"
          className="md:w-full"
        />
      </div>
    </div>
  );
}
