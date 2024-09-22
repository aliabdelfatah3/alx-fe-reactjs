// src/components/Search.jsx
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState(""); // State for input
  const [userData, setUserData] = useState(null); // State for fetched data
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(""); // State for error handling

  const handleInputChange = (event) => {
    setUsername(event.target.value); // Update username on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Show loading while fetching data
    setError(""); // Clear previous errors

    try {
      const data = await onSearch(username); // Fetch user data using the passed function
      setUserData(data); // Set user data if successful
    } catch (err) {
      setUserData(null); // Clear user data if error
      setError("Looks like we can’t find the user"); // Set error message
    } finally {
      setLoading(false); // Stop loading after fetching data
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Show error message */}
      {userData && ( // Display user data if available
        <div className="user-info mt-4">
          <img
            src={userData.avatar_url} // User's avatar URL
            alt={`${userData.login}'s avatar`} // Alt text for the image
            className="w-16 h-16 rounded-full" // Style for the image
          />
          <h2 className="text-xl font-bold">{userData.login}</h2>{" "}
          {/* User's login name */}
        </div>
      )}
    </div>
  );
};

export default Search;
