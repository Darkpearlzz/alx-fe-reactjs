import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      setError("");
      setUser(null);
      setLoading(true);

      const userData = await fetchUserData(username);

      setUser(userData);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && !loading && !error && (
        <div className="user-card">
          <img
            src={user.avatar_url}
            alt={user.login}
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
