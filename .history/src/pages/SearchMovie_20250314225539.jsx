// import { useSelector } from "react-redux";
// import MoiveCard from "../components/MoiveCard";
// import { IMAGE_PATH } from "../constants/constants";

// function SearchMovie() {
//   const movies = useSelector((state) => state.movieReducer.movies);
//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-4 mt-4">
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <div key={movie.id}>
//               <MoiveCard
//                 title={movie.title}
//                 poster={IMAGE_PATH + movie.poster_path}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No movies found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchMovie;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchMovies } from "../redux/actions";
import MoiveCard from "../components/MoiveCard";
import { IMAGE_PATH } from "../constants/constants";

function SearchMovie() {
  const { params } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  useEffect(() => {
    if (params) {
      dispatch(searchMovies(params));
    }
  }, [dispatch, params]);

  return (
    <div>
      <h2 className="text-white text-2xl mt-4">Search Results for {params}</h2>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <MoiveCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
