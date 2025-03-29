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

  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  useEffect(() => {
    console.log(trailer);
  });

  return (
    <div>
      <MovieDetails movie={movie} />
      <iframe
        className="w-full md:w-[560px] h-[315px] rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/h6I_BjRmL2A`}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Movie;
