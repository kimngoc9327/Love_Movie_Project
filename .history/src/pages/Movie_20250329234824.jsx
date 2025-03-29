import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getMovie,
  getMovieCollection,
  getRecommendations,
} from "../redux/actions/movieActions";

import MovieDetails from "../components/ui/MovieDetails";
import CastList from "../components/ui/CastList";
import MovieCollectionList from "../components/ui/MovieCollectionList";
import RecommendationsMovie from "../components/ui/RecommendationsMovie";

function Movie() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.currentMovie);
  const recommendation = useSelector(
    (state) => state.movieReducer.recommendations
  );
  const collection = useSelector((state) => state.movieReducer.collection);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idMovie = queryParams.get("id");

  useEffect(() => {
    if (idMovie) {
      dispatch(getMovie(idMovie));
    }
  }, [dispatch, idMovie]);

  useEffect(() => {
    if (idMovie) {
      dispatch(getRecommendations(idMovie));
    }
  }, [dispatch, idMovie]);

  const collectionId = movie?.belongs_to_collection?.id;

  useEffect(() => {
    if (collectionId) {
      dispatch(getMovieCollection(collectionId));
    }
  }, [dispatch, collectionId]);

  useEffect(() => {
    console.log(movie);
  });
  return (
    <div>
      <MovieDetails movie={movie} />
      <div className="mx-20">
        <CastList movie={movie} />
        <MovieCollectionList collection={collection} />
        <RecommendationsMovie recommendations={recommendation} />
      </div>
    </div>
  );
}

export default Movie;
