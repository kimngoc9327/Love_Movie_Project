import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, BASE_URL, POSTER_PATH } from "../../constants/constants";
import axios from "axios";
import PropTypes from "prop-types";

function SearchInput({ open, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]); // Thêm state cục bộ để lưu kết quả gợi ý
  const searchInputRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    onClose();
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
        className="ml-auto mr-8 flex items-center space-x-3 relative max-md:absolute max-md:top-10 max-md:left-0 max-md:w-screen"
      >
        <input
          placeholder="Search"
          className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md max-lg:max-w-40 max-md:mr-0 max-md:hidden"
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
        />
        {open && (
          <input
            ref={searchInputRef}
            placeholder="Search"
            className="md:hidden h-[36px] text-white pl-8 bg-[#141519] border-b border-b-red-500 focus:outline-none w-screen mr-0 "
            value={query || ""}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        <button
          type="submit"
          className="bg-red-500 px-[7px] h-[36px] text-center rounded-md max-md:hidden"
        >
          Search
        </button>

        {showResults && suggestions?.results?.length > 0 && (
          <div
            ref={resultsRef}
            className="absolute w-90 top-10 bg-black text-white mt-2 shadow-lg p-2 max-md:top-7"
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

SearchInput.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SearchInput;
