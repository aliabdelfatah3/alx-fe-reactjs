import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
