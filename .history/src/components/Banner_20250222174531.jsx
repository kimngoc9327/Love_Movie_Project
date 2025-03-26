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
    <div className="relative w-screen h-screen">
      <img
        src={BachXa}
        className="absolute w-screen h-screen object-cover opacity-50"
      />
      <img
        src={BachXa}
        className="absolute right-[250px]  w-[250px] h-[350px] mt-[137px] object-cover "
      />
      <p>{currentMovie.translations.translations[4].overview}</p>
    </div>
  );
}

export default Banner;
