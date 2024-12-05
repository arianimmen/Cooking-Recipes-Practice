import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAsyncSingleRecipeFood } from "../features/singleRecipe/singleRecipe";

function RecipeSingleItem() {
  const { id } = useParams();

  const { loading, foods, error } = useSelector(
    (state) => state.singleRecipFood
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncSingleRecipeFood({ id: id }));
  }, [dispatch, id]);

  return (
    <div className="py-16 px-4 border rounded-3xl md:px-10 border-zinc-300 mb-16">
      <RecipeSingleItemHeader />
    </div>
  );
}

export default RecipeSingleItem;

function RecipeSingleItemHeader() {
  return (
    <div className="flex flex-col items-center ">
      <span className="bg-red-400 text-white py-1 px-3 rounded-2xl text-sm mb-3 md:text-lg">
        Recipes
      </span>
      <h1 className="font-extrabold text-3xl text-center mb-3 md:text-7xl">
        Lemon Garlic Roasted Chicken
      </h1>
      <p className="text-base text-center text-zinc-600 md:text-xl">
        Welcome to Cooks Delight, where culinary dreams come alive! Today, we
        embark on a journey of flavors with a dish that promises to elevate your
        dining experience – our Citrus Infusion Delight: Lemon Garlic Roasted
        Chicken.
      </p>

      {/* Cooking Inforamtion Summary */}
      <div className="flex items-center gap-x-6 flex-wrap justify-center mt-10 mb-11">
        <span className="flex items-center gap-x-3">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.03 6.39L17.45 4.97C17 4.46 16.55 4 16.04 3.56L14.62 5C13.07 3.74 11.12 3 9 3C6.61305 3 4.32387 3.94821 2.63604 5.63604C0.948212 7.32387 0 9.61305 0 12C0 14.3869 0.948212 16.6761 2.63604 18.364C4.32387 20.0518 6.61305 21 9 21C14 21 18 16.97 18 12C18 9.88 17.26 7.93 16.03 6.39ZM10 13H8V6H10V13ZM12 0H6V2H12V0Z"
              fill="black"
            />
          </svg>
          <span className="font-medium md:text-lg">1 hour</span>
        </span>

        <span className="w-1 h-1 bg-black rounded-full"></span>

        <span className="flex items-center gap-x-3">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00012 3C7.28345 3 7.52112 2.904 7.71312 2.712C7.90512 2.52 8.00078 2.28267 8.00012 2C8.00012 1.71667 7.90412 1.47933 7.71212 1.288C7.52012 1.09667 7.28278 1.00067 7.00012 1C6.71678 1 6.47945 1.096 6.28812 1.288C6.09678 1.48 6.00078 1.71733 6.00012 2C6.00012 2.28333 6.09612 2.521 6.28812 2.713C6.48012 2.905 6.71745 3.00067 7.00012 3ZM8.71012 3H11.0561C11.4661 3 11.8194 3.13133 12.1161 3.394C12.4121 3.65667 12.5888 3.99133 12.6461 4.398L13.8981 13.168C13.9688 13.652 13.8434 14.0787 13.5221 14.448C13.2008 14.816 12.7894 15 12.2881 15H1.71212C1.21078 15 0.79945 14.8157 0.478117 14.447C0.156783 14.0783 0.03145 13.6517 0.102117 13.167L1.35412 4.398C1.41145 3.99133 1.58812 3.65667 1.88412 3.394C2.18145 3.13133 2.53512 3 2.94512 3H5.29112C5.20312 2.85867 5.13278 2.70267 5.08012 2.532C5.02678 2.36067 5.00012 2.18333 5.00012 2C5.00012 1.436 5.19245 0.961667 5.57712 0.577C5.96178 0.192333 6.43612 0 7.00012 0C7.56412 0 8.03845 0.192333 8.42312 0.577C8.80778 0.961667 9.00012 1.436 9.00012 2C9.00012 2.18333 8.97378 2.36067 8.92112 2.532C8.86845 2.70267 8.79812 2.85867 8.71012 3Z"
              fill="black"
            />
          </svg>
          <span className="font-medium md:text-lg">HARD PREP</span>
        </span>

        <span className="w-1 h-1 bg-black rounded-full"></span>

        <span className="flex items-center gap-x-3">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C8.22733 0 8.44535 0.0901548 8.60609 0.250631C8.76684 0.411108 8.85714 0.628761 8.85714 0.855709V2.04229C10.8194 2.25339 12.6342 3.18115 13.9527 4.6472C15.2712 6.11325 16.0004 8.01413 16 9.98441C16 10.4383 15.8194 10.8736 15.4979 11.1946C15.1764 11.5155 14.7404 11.6958 14.2857 11.6958H1.71429C1.25963 11.6958 0.823594 11.5155 0.502103 11.1946C0.180612 10.8736 7.08999e-09 10.4383 7.08999e-09 9.98441C-8.30288e-05 8.01433 0.729207 6.11373 2.0477 4.64792C3.36619 3.1821 5.18083 2.25451 7.14286 2.04343V0.856849C7.14271 0.74438 7.16477 0.632985 7.20778 0.529034C7.25078 0.425083 7.3139 0.330615 7.3935 0.251034C7.47311 0.171454 7.56765 0.108321 7.67172 0.0652459C7.77579 0.0221712 7.88734 -9.99724e-08 8 0ZM0.891429 13.2886C0.6641 13.2886 0.446083 13.3787 0.285337 13.5392C0.124592 13.6997 0.0342858 13.9173 0.0342858 14.1443C0.0342858 14.3712 0.124592 14.5889 0.285337 14.7494C0.446083 14.9098 0.6641 15 0.891429 15H15.1086C15.3359 15 15.5539 14.9098 15.7147 14.7494C15.8754 14.5889 15.9657 14.3712 15.9657 14.1443C15.9657 13.9173 15.8754 13.6997 15.7147 13.5392C15.5539 13.3787 15.3359 13.2886 15.1086 13.2886H0.891429Z"
              fill="#262522"
            />
          </svg>
          <span className="font-medium md:text-lg">4 SERVES</span>
        </span>
      </div>

      {/* Main Picture */}
      <div className="w-full">
        <img
          className="w-full object-cover "
          src="/public/images/Hero  Section (1).png"
          alt="Main food Image"
        />
      </div>
    </div>
  );
}
