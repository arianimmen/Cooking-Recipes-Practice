import { useParams } from "react-router-dom";

function RecipeSingleItem() {
  const { id } = useParams();
  console.log(id);

  return <div>RecipeSingleItem</div>;
}

export default RecipeSingleItem;
