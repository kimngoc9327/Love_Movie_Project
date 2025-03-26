import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/ui/MovieCard";
import { IMAGE_PATH } from "../constants/constants";
import { useEffect } from "react";
import { getMovieDiscover } from "../redux/actions";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";

function SearchMovie() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genreId = queryParams.get("genre"); // Lấy genreId từ URL

  useEffect(() => {
    if (genreId) {
      dispatch(getMovieDiscover(genreId)); // Gọi API khi có genreId
    }
  }, [dispatch, genreId]);

  useEffect(() => {
    console.log(movies);
  });
  return (
    <div>
      <Header />
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
          ))}{" "}
        : (<p className="text-gray-400">No movies found</p>)
      </div>
    </div>
  );
}

export default SearchMovie;
