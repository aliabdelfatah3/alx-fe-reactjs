// src/components/Search.jsx
import React, { useState } from "react";
import axios from "axios";
import { fetchUserData } from "../services/githubService"; // Import the updated service

const Search = () => {
  const [username, setUsername] = useState(""); // State for username input
  const [location, setLocation] = useState(""); // State for location input
  const [repoCount, setRepoCount] = useState(""); // State for repository count
  const [users, setUsers] = useState([]); // State for fetched users
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(""); // State for error handling

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (event && event.target) {
      setUsername(event.target.value); // Capture the value from the input
    }
    if (name === "username") setUsername(value);
    else if (name === "location") setLocation(value);
    else if (name === "repoCount") setRepoCount(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Show loading while fetching data
    setError(""); // Clear previous errors

    const query = buildQuery(username, location, repoCount); // Construct the query

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub API
      if (data) {
        setUserData(data); // Set fetched user data
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      {loading && <p>Loading...</p>} {/* Show loading while fetching */}
      {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
      {/* Show error message */}
      {userData && ( // If user data is available, display it
        <div className="user-details mt-4">
          <img
            src={userData.avatar_url} // Display user's avatar
            alt={`${userData.login}'s avatar`}
            className="w-20 h-20 rounded-full"
          />
          <p className="mt-2 font-bold">{userData.login}</p>{" "}
          {/* Display user's login name */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

// Function to build the query string based on user input
const buildQuery = (username, location, repoCount) => {
  let query = username ? `login:${username}` : "";

  if (location) {
    query += ` location:${location}`;
  }

  if (repoCount) {
    query += ` repos:>${repoCount}`;
  }

  return query.trim(); // Return the constructed query
};

export default Search;
