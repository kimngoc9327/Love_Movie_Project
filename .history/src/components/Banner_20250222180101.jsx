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
    console.log(
      "Movies updated:",
      currentMovie?.translations?.translations[4]?.data?.overview
    );
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
      <div className="absolute w-full flex items-center justify-around mt-[137px] ">
        <div>
          <p className="w-[600px]">
            {currentMovie?.translations?.translations[4]?.data?.overview}
          </p>
        </div>
        <img src={BachXa} className=" w-[250px] h-[350px] object-cover " />
      </div>
    </div>
  );
}

export default Banner;
