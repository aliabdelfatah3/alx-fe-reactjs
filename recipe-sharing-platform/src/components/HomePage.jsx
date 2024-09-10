import React, { useEffect, useState } from "react";

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
      <div className="flex justify-center">
        <h1 className="w-fit text-2xl font-bold border-b-2 py-2 border-black">
          Recipes Lists
        </h1>
      </div>
      <div className="flex justify-center gap-28 mt-20">
        <div className="hover:scale-110 hover:shadow-2xl">
          {recipes
            .filter((recipe) => recipe.id === 1)
            .map((recipe) => (
              <div key={recipe.id} className="size-80 p-4 border shadow-md">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl mb-3 font-semibold">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            ))}
        </div>
        <div className="hover:scale-110 hover:shadow-2xl">
          {recipes
            .filter((recipe) => recipe.id === 2)
            .map((recipe) => (
              <div key={recipe.id} className="size-80 p-4 border shadow-md  ">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl mb-3 font-semibold">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
