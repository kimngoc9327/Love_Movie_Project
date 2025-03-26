import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovies } from "../redux/actions";
import MovieCard from "../components/ui/MovieCard";
import { IMAGE_PATH } from "../constants/constants";

function MovieCategory() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const movies = useSelector((state) => state.movieReducer.movies[category]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (category) {
      const params = {
        page: page,
      };
      dispatch(getMovies(category, params));
    }
  }, [dispatch, category, page]);
  useEffect(() => {
    console.log(movies);
  });
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {movies?.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </div>
          ))}
        : (<p className="text-gray-400">No movies found</p>)
      </div>
      <button className="bg-white" onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button className="bg-white" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default MovieCategory;
