import { useDispatch, useSelector } from "react-redux";
import MoiveCard from "../components/MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
import { useEffect } from "react";
import { getMovieDiscover, getMovies } from "../redux/actions";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function SearchMovie() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genreId = queryParams.get("genre"); // Lấy genreId từ URL
  const category = queryParams.get("category");

  useEffect(() => {
    if (genreId) {
      dispatch(getMovieDiscover(genreId)); // Gọi API khi có genreId
    }
  }, [dispatch, genreId]);
  useEffect(() => {
    console.log(movies);
  });

  useEffect(() => {
    if (category) {
      dispatch(getMovies(category));
    }
  }, [dispatch, category]);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {movies?.category?.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MoiveCard
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
