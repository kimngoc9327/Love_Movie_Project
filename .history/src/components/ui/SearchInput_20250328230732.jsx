import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="ml-auto mr-8  flex items-center space-x-3"
    >
      <input
        className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md "
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-red-500 px-[7px] h-[36px] text-center rounded-md"
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
