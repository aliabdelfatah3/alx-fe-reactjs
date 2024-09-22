import axios from "axios"
const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${githubApiKey}`,
    },
  });
  const data = await response.json();
  return data;
};
