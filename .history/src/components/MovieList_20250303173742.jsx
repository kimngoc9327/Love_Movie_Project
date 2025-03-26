import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { useSelector } from "react-redux";
import MoiveCard from "./MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="m-6">
      <p>Phim hot</p>
      <div className="flex space-x-2 ">
        {movies.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MoiveCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
