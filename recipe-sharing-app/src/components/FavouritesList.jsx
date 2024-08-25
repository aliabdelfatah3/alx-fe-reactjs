import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes.</p>
      )}
    </div>
  );
};

export default FavoritesList;
