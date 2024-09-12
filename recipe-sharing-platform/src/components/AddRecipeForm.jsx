import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Recipe title is required";
    if (!ingredients || ingredients.split("\n").length < 2)
      newErrors.ingredients = "At least two ingredients are required";
    if (!steps) newErrors.steps = "Preparation steps are required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({
        title,
        ingredients: ingredients.split("\n"),
        steps,
      });
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Recipe Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Ingredients Textarea */}
      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-semibold mb-2"
        >
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter ingredients separated by line breaks"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps Textarea */}
      <div className="mb-4">
        <label
          htmlFor="steps"
          className="block text-gray-700 font-semibold mb-2"
        >
          Preparation Steps
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
