import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import MoiveCard from "./MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import PropTypes from "prop-types";

function MovieList({ category, sectionTitle }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  useEffect(() => {
    dispatch(getMovies(category));
  }, [dispatch, category]);

  return (
    <div className="m-6">
      <div className="relative h-[35px] w-30 mb-10 bg-red-500">
        <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
        <p className="text-white text-center min-[120px]  h-full pt-1 font-medium">
          {sectionTitle}
        </p>
      </div>

      <Swiper
        spaceBetween={1}
        slidesPerView={6}
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
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
};

export default MovieList;
