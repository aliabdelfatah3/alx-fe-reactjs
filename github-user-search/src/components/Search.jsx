import React, { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
        className="border p-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
