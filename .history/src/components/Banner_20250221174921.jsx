import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions";
import { useEffect } from "react";

function Banner() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies updated:", movie);
  }, [movie]);

  return <div>Banner</div>;
}

export default Banner;
