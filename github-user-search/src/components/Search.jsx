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

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="user-info">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="w-16 h-16 rounded-full"
          />
          <h2 className="text-xl font-bold">{userData.login}</h2>
        </div>
      )}
    </div>
  );
}

export default Search;
