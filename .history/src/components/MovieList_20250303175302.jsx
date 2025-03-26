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
      <div className="relative h-6 w-30 mb-20">
        <div className="absolute right-0 w-0 h-0 border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent border-l-[100px] border-red-500"></div>
        <p className="text-white">Phim hot</p>
      </div>
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
