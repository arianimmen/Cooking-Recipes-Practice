import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAsyncSingleRecipeFood } from "../features/singleRecipe/singleRecipe";

function RecipeSingleItem() {
  const { id } = useParams();

  const { loading, foods, error } = useSelector(
    (state) => state.singleRecipFood
  );

  // Initializing the dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();

  // useEffect hook to fetch random foods when the component mounts
  useEffect(() => {
    dispatch(getAsyncSingleRecipeFood({ id: id }));
  }, [dispatch, id]); // Dependency array ensures the effect runs only when dispatch is updated

  console.log(foods);

  return <div>RecipeSingleItem</div>;
}

export default RecipeSingleItem;
