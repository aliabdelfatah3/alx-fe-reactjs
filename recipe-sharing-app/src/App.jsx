import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <RecipeList />
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
