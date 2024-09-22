// src/services/githubService.js
import axios from "axios";

const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY; // Get the API key from environment variables

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${githubApiKey}`, // Include the API token in headers
        },
      }
    );
    return response.data; // Return the user data
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error; // Re-throw the error for handling in the component
  }
};
