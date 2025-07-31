import { useState } from "react";

export default function SearchBar() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", username);
    // Stage 2: We'll call the GitHub API here
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
