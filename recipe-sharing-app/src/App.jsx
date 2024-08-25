import React from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
