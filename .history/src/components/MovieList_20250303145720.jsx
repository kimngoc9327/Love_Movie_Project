import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { useSelector } from "react-redux";
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => {
    state.movieReducer.movies;
  });
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log(movies);
  });

  return <div></div>;
}

export default MovieList;
