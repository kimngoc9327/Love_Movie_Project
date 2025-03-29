import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovie, getMovieCollection } from "../redux/actions/movieActions";

import MovieDetails from "../components/ui/MovieDetails";
import CastList from "../components/ui/CastList";

function Movie() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.currentMovie);
  const collection = useSelector((state) => state.movieReducer.collection);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idMovie = queryParams.get("id");
  const collectionId = movie?.belongs_to_collection?.id;

  useEffect(() => {
    if (idMovie) {
      dispatch(getMovie(idMovie));
    }
  }, [dispatch, idMovie]);

  useEffect(() => {
    dispatch(getMovieCollection(collectionId));
  }, [dispatch, collectionId]);

  useEffect(() => {
    console.log(collection);
  });
  return (
    <div>
      <MovieDetails movie={movie} />
      <CastList movie={movie} />
    </div>
  );
}

export default Movie;
