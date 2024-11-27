// Functional component to display individual food item details
function FoodItem({ image, title, creditsText, readyInMinutes, servings }) {
  return (
    <div className="bg-white bg-opacity-50 mb-6 rounded-3xl border border-zinc-300 w-full">
      {/* Image Section */}
      <div className="relative">
        {/* Image of the food item */}
        <img
          className="rounded-t-2xl w-full h-64 object-cover" // Styling the image to cover its container
          src={image} // Passing the image URL as a prop
          alt="Food item" // Alt text for accessibility
        />
        {/* Overlay dark background for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-2xl"></div>
      </div>

      {/* Description Section */}
      <div className="p-4">
        {/* Title of the food item */}
        <h3 className="font-bold text-xl mb-3">{title}</h3>

        {/* Credits text, showing the source or creator of the recipe */}
        <p className="text-sm mb-10">{creditsText}</p>

        {/* Food preparation details */}
        <div className="mb-4 flex text-xs font-bold">
          <div>
            {/* Displaying cooking time, prep difficulty, and servings */}
            <span>{readyInMinutes} MIN - </span>
            <span>EASY PREP - </span>
            <span>{servings} SERVES</span>
          </div>
        </div>

        {/* Button to view the recipe */}
        <button className="w-full border border-orange-950 rounded-3xl py-3">
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem; // Exporting the component for use in other parts of the app
