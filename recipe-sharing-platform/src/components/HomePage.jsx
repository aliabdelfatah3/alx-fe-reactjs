import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error loading recipes", error));
  }, []);

  return (
    <div>
      <div className="flex justify-center ">
        <h1 className="w-fit text-2xl font-bold border-b-2 py-2 border-black">
          Recipes Lists
        </h1>
      </div>
      <div className="grid gap-10 lg:pl-96 mt-20 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex  w-fit bg-emerald-800 rounded-md hover:scale-105 hover:shadow-2xl">
          {recipes
            .filter((recipe) => recipe.id === 1)
            .map((recipe) => (
              <div key={recipe.id} className="h-96 p-4 border shadow-md">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl mb-3 text-emerald-100 font-semibold">
                  {recipe.title}
                </h2>
                <p className="text-emerald-50">{recipe.summary}</p>
                <div className="w-fit h-fit">
                  <NavLink to={`/recipe/${recipe.id}`}>
                    <a className="">Learn More</a>
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col w-fit bg-emerald-800 rounded-md hover:scale-110 hover:shadow-2xl">
          {recipes
            .filter((recipe) => recipe.id === 2)
            .map((recipe) => (
              <div key={recipe.id} className="h-96  p-4 border shadow-md  ">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl mb-3 text-emerald-100 font-semibold">
                  {recipe.title}
                </h2>
                <p className="text-emerald-50">{recipe.summary}</p>
                <div className="flex justify-end w-fit h-fit">
                  <NavLink to={`/recipe/${recipe.id}`}>
                    <a className="">Learn More</a>
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
