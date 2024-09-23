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
      const data = await fetchUserData(query); // Call the fetch function with the query
      setUsers(data); // Set users data if successful
    } catch (err) {
      setUsers([]); // Clear users data if error occurs
      setError("Error fetching users. Please try again."); // Set error message
    } finally {
      setLoading(false); // Stop loading after fetching data
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="GitHub Username"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Location"
          className="p-2 border rounded ml-2"
        />
        <input
          type="number"
          name="repoCount"
          value={repoCount}
          onChange={handleInputChange}
          placeholder="Min Repo Count"
          className="p-2 border rounded ml-2"
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
      {users.length > 0 && ( // Display users if available
        <div className="user-list mt-4">
          <h3 className="text-lg font-semibold">Users:</h3>
          <ul>
            {users.map(
              (
                user // Use map to display each user
              ) => (
                <li key={user.id} className="border p-2 mt-2 rounded">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {user.login}
                  </a>
                </li>
              )
            )}
          </ul>
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
