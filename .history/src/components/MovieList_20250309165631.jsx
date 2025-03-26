// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getMovies } from "../redux/actions";
// import { useSelector } from "react-redux";
// import MoiveCard from "./MoiveCard";
// import { IMAGE_PATH } from "../constants/constants";
// import { Swiper, SwiperSlide } from "swiper/react";

// function MovieList() {
//   const dispatch = useDispatch();
//   const movies = useSelector((state) => state.movieReducer.movies);
//   useEffect(() => {
//     dispatch(getMovies());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log(movies);
//   }, [movies]);

//   return (
//     <div className="m-6">
//       <div className="relative h-[35px] w-30 mb-10 bg-red-500 ">
//         <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
//         <p className="text-white text-center w-full h-full pt-1 font-medium ">
//           Phim hot
//         </p>
//       </div>

//       <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {movies.results
//           ?.filter((movie) => movie.title && movie.poster_path)
//           .map((movie) => (
//             <SwiperSlide key={movie.id}>
//               <MoiveCard
//                 title={movie.title}
//                 poster={IMAGE_PATH + movie.poster_path}
//               />
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </div>
//   );
// }

// export default MovieList;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import MoiveCard from "./MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS
import "swiper/css/navigation"; // Import navigation nếu cần
import { Navigation } from "swiper/modules"; // Import module Navigation

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="m-6">
      {/* Tiêu đề */}
      <div className="relative h-[35px] w-30 mb-10 bg-red-500">
        <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
        <p className="text-white text-center w-full h-full pt-1 font-medium">
          Phim hot
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={1} // Khoảng cách giữa các slide
        slidesPerView={5} // Số lượng slide hiển thị cùng lúc
        navigation // Bật nút next/prev
        modules={[Navigation]} // Sử dụng module Navigation
      >
        {movies?.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <MoiveCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MovieList;
