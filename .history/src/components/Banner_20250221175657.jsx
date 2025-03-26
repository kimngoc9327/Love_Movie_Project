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
    console.log("Movies updated:", movie.belongs_to_collection);
  });

  //   const posterPath = `https://image.tmdb.org/t/p/original${movie.belongs_to_collection.poster_path}`;

  return <div>{/* <img src={posterPath} /> */}</div>;
}

export default Banner;
