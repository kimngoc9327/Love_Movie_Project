import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { useSelector } from "react-redux";
import MoiveCard from "./MoiveCard";
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies || []);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div>
      {movies?.results?.map((movie) => (
        <div key={movie.id}>
          <MoiveCard title={movie.title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
