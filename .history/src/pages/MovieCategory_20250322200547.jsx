import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovies } from "../redux/actions";

function MovieCategory() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies[category]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    if (category) {
      dispatch(getMovies(category));
    }
  }, [dispatch, category]);
  useEffect(() => {
    console.log(movies);
  });
  return <div>List</div>;
}

export default MovieCategory;
