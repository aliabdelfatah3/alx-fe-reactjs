const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;
export const fetchGitHubData = async (username) => {
  const response = await fetch(`https://api.github.com/users    /${username}`, {
    headers: {
      Authorization: `token ${githubApiKey}`,
    },
  });
  const data = await response.json();
  return data;
};
