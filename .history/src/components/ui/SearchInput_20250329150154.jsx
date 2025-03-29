// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { searchMovie } from "../../redux/actions/movieActions";
// import { POSTER_PATH } from "../../constants/constants";

// function SearchInput() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const movies = useSelector((state) => state.movieReducer.search);
//   // const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   const [showResults, setShowResults] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       dispatch(searchMovie({ query: query }));
//       setShowResults(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [dispatch, query]);

//   useEffect(() => {
//     setShowResults(false);
//   }, [location.pathname, location.search]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/search?query=${query}`);
//   };

//   const handleSelectMovie = (id) => {
//     navigate(`/movie?id=${id}`);
//     setShowResults(false);
//     setQuery("");
//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSearch}
//         className="ml-auto mr-8  flex items-center space-x-3"
//       >
//         <input
//           className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md "
//           placeholder="Search"
//           value={query || ""}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-red-500 px-[7px] h-[36px] text-center rounded-md"
//         >
//           Search
//         </button>

//         {showResults && movies?.results?.length > 0 && (
//           <div className="absolute w-90 top-14 bg-black text-white mt-2 rounded-md shadow-lg p-2">
//             {movies?.results?.slice(0, 8).map((movie, index) => (
//               <div
//                 onClick={() => handleSelectMovie(movie?.id)}
//                 key={index}
//                 className=" p-2 cursor-pointer hover:bg-gray-800 flex space-x-4 items-center"
//               >
//                 <img
//                   src={POSTER_PATH + movie.poster_path}
//                   className="object-cover w-10 h-10"
//                 />
//                 <span className="text-gray-300">{movie.title}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </form>
//     </>
//   );
// }

// export default SearchInput;

import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { searchMovie } from "../../redux/actions/movieActions";
import { AUTH_TOKEN, BASE_URL, POSTER_PATH } from "../../constants/constants";
import axios from "axios";

function SearchInput() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const location = useLocation();
  // const movies = useSelector((state) => state.movieReducer.search);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Tạo ref để tham chiếu đến hộp kết quả tìm kiếm
  const resultsRef = useRef(null);

  const [suggestions, setSuggestions] = useState([]); // Thêm state cục bộ để lưu kết quả gợi ý

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async (params = {}) => {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        params: {
          ...params,
        },
      }); // Giả sử có API riêng
      const data = await response.json();
      setSuggestions(data.results);
      setShowResults(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  console.log(suggestions);

  useEffect(() => {
    setShowResults(false);
  }, [location.pathname, location.search]);

  // Đóng showResults khi click ra ngoài
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
        className="ml-auto mr-8 flex items-center space-x-3 relative"
      >
        <input
          className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md"
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

        {/* Hiển thị kết quả tìm kiếm */}
        {showResults && suggestions?.results?.length > 0 && (
          <div
            ref={resultsRef} // Gán ref vào hộp kết quả
            className="absolute w-90 top-14 bg-black text-white mt-2 rounded-md shadow-lg p-2"
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
