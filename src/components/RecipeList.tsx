import { useSelector } from "react-redux";
// import { recipeFilterCategory } from "../helpers/recipeFilterCategory";
// import { RecipeListProps } from "../models/Recipes";
import { RecipeCardItem } from "./RecipeCardItem";
import { RootState } from "../redux/store";

export const RecipeList = () => {
  const recipes = useSelector((state: RootState) => state.recipes);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.data.map((recipe) => (
            <RecipeCardItem key={recipe.id} recipeId={recipe.id} />
          ))}
        </div>
      </div>
    </>
  );
};
