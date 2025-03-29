import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../../redux/actions/movieActions";

function SearchInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movieReducer.search);
  // const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchMovie({ query: query }));
      setShowResults(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, query]);

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="ml-auto mr-8  flex items-center space-x-3"
      >
        <input
          className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md "
          placeholder="Search"
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-500 px-[7px] h-[36px] text-center rounded-md"
        >
          Search
        </button>
      </form>

      <div className="bsolute w-full bg-black text-white mt-2 rounded-md shadow-lg p-2">
        {movies?.results?.map((movie, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-800 flex"
          >
            <span className="text-gray-300">{movie.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchInput;
