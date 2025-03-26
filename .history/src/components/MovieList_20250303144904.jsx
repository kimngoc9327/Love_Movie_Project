import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
function MovieList() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(getMovies));
  }, [dispatch]);

  return <div></div>;
}

export default MovieList;
