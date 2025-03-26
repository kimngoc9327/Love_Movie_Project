import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions";
import { useEffect } from "react";

function Banner() {
  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movieReducer.currentMovie);
  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies updated:", currentMovie);
  });

  const posterPath = currentMovie?.belongs_to_collection?.poster_path
    ? `https://image.tmdb.org/t/p/original${currentMovie.belongs_to_collection.poster_path}`
    : null;

  return (
    <div>
      <img src={posterPath} />
    </div>
  );
}

export default Banner;
