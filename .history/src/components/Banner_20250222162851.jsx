import BachXa from "../assets/Bach xa 2.jpg";

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

  // const posterPath = currentMovie?.poster_path
  //   ? `https://image.tmdb.org/t/p/original${currentMovie.poster_path}`
  //   : null;

  return (
    <div>
      <img src={BachXa} className="w-screen h-screen" />
    </div>
  );
}

export default Banner;
