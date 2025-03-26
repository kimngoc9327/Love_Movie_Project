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

  return (
    <div className="relative w-screen h-screen">
      <img
        src={BachXa}
        className="absolute w-screen h-screen object-cover opacity-50"
      />
      <div className="absolute w-full flex items-center justify-around mt-[137px] ">
        <div className="space-y-4">
          <p
            className="p-2 text-sm text-center w-[80px] rounded-[2px] 
                 bg-gradient-to-r from-red-500 via-pink-500  to-red-400
                 "
          >
            Movie
          </p>
          <p className="w-[600px] text-justify">
            {currentMovie?.translations?.translations[4]?.data?.overview}
          </p>
          <div className="flex space-x-8 text-white">
            <button className="font-bold p-2 pl-3 pr-3 rounded-[4px] bg-black ">
              Chi tiết
            </button>
            <button className="font-bold p-2 pl-3 pr-3 rounded-[4px] bg-red-500">
              Xem phim
            </button>
          </div>
        </div>
        <img
          src={BachXa}
          className=" w-[250px] h-[350px] object-cover shadow-2xl "
        />
      </div>
    </div>
  );
}

export default Banner;
