import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe details", error));
  }, [id]);
  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex pt-10 justify-center">
      <div className="w-96 border shadow-lg bg-emerald-300">
        <h1 className="font-bold text-center text-white bg-emerald-950">
          {recipe.title}
        </h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mb-4 w-full h-60 object-cover rounded"
        />
        <h2 className="font-bold">Ingredients:</h2>
        <ul className="list-disc pl-7 mb-2 ">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="font-bold">Instructions:</h2>
        <ul className="pl-3">
          {recipe.instructions?.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <div className="my-3 text-center ">
          <NavLink to={"/"}>
            <button className="bg-blue-400 py-1 px-3 rounded-full">
              HomePage
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
