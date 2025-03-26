import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import MoiveCard from "./MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";

function MovieList({ category, sectionTitle, params = {} }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies[category]);

  useEffect(() => {
    dispatch(getMovies(category, params));
  }, [dispatch, category, params]);

  useEffect(() => {
    console.log(movies);
  });

  return (
    <div className="m-6">
      <div className="flex justify-between mt-10 mb-6 text-white">
        <div className="relative h-[35px] w-40   bg-red-500">
          <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
          <p className=" text-center min-w-[120px]  h-full pt-1 font-medium">
            {sectionTitle}
          </p>
        </div>
        <div className="flex space-x-1 items-center hover:text-[#3274D9] hover:cursor-pointer">
          <p>See All</p>
          <i className="ri-arrow-drop-right-line text-xl"></i>
        </div>
      </div>

      <Swiper
        spaceBetween={1}
        slidesPerView={6}
        navigation
        modules={[Navigation]}
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
MovieList.propTypes = {
  category: PropTypes.string,
  sectionTitle: PropTypes.string,
  params: PropTypes.object,
};

export default MovieList;
