import React from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

import "./App.css";

function App() {
  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
