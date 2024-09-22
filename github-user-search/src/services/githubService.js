import axios from "axios";

const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (query) => {
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
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: `token ${githubApiKey}`,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};
