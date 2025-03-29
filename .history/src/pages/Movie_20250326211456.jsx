import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovie } from "../redux/actions/movieActions";

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

  return (
    <div>
      <MovieDetails movie={movie} />
      <video
        src="https://www.youtube.com/watch?v=h6I_BjRmL2A"
        type="video/mp4"
      ></video>
    </div>
  );
}

export default Movie;
