import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, BASE_URL, POSTER_PATH } from "../../constants/constants";
import axios from "axios";

function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const resultsRef = useRef(null);

  const [suggestions, setSuggestions] = useState([]); // Thêm state cục bộ để lưu kết quả gợi ý

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
          params: {
            query: query,
            include_adult: false,
            language: "en-US",
            page: 1,
          },
        });

        setSuggestions(response.data);
        setShowResults(true);
      } catch (error) {
        console.error("Lỗi khi tìm kiếm phim:", error);
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setShowResults(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
    setShowResults(false);
    setQuery("");
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="ml-auto mr-8 flex items-center space-x-3 relative max-md:hidden "
      >
        <input
          className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md max-lg:max-w-40"
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

        {showResults && suggestions?.results?.length > 0 && (
          <div
            ref={resultsRef}
            className="absolute w-90 top-10 bg-black text-white mt-2 rounded-md shadow-lg p-2"
          >
            {suggestions?.results?.slice(0, 8).map((movie, index) => (
              <div
                onClick={() => handleSelectMovie(movie?.id)}
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-800 flex space-x-4 items-center"
              >
                <img
                  src={POSTER_PATH + movie.poster_path}
                  className="object-cover w-10 h-10"
                />
                <span className="text-gray-300">{movie.title}</span>
              </div>
            ))}
          </div>
        )}
      </form>
    </>
  );
}

export default SearchInput;
