import { useEffect } from "react";
import { getMovie } from "../redux/actions/movieActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/ui/MovieCard";
import { POSTER_PATH, BACKDROP_PATH } from "../constants/constants";
import MovieList from "../components/ui/MovieList";
import MovieDetails from "../components/ui/MovieDetails";

function Movie() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.currentMovie);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idMovie = queryParams.get("id");

  useEffect(() => {
    if (idMovie) {
      dispatch(getMovie(idMovie));
    }
  }, [dispatch, idMovie]);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <div>
      <MovieDetails />
    </div>
  );
}

export default Movie;
