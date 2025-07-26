import { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [maxTime, setMaxTime] = useState("");

  const handleSearch = () => {
    onSearch({ query, maxTime });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name or ingredients"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max prep time (mins)"
        value={maxTime}
        onChange={(e) => setMaxTime(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
