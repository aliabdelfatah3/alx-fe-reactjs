import React, { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await onSearch(username); 
      setUserData(data);
      setError(""); 
    } catch (err) {
      setUserData(null); 
      setError("Looks like we cant find the user"); 
    }

    setLoading(false); 
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
