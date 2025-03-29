import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovie } from "../redux/actions/movieActions";

import MovieDetails from "../components/ui/MovieDetails";
import CastList from "../components/ui/CastList";

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
      <MovieDetails movie={movie} />
      <CastList movie={movie} />
    </div>
  );
}

export default Movie;
