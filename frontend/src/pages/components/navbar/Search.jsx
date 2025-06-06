import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <form className="w-100" role="search" onSubmit={handleSearch}
    style={{maxWidth: "500px"}}>
      <div className="input-group w-100">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-light" type="submit">
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
