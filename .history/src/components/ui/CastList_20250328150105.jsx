import PropTypes from "prop-types";
import MovieCast from "./MovieCast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function CastList({ movie }) {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={8}
      navigation
      modules={[Navigation]}
    >
      {movie?.casts?.cast?.map((cast, index) => (
        <SwiperSlide key={index}>
          <MovieCast cast={cast} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

CastList.propTypes = {
  movie: PropTypes.any,
};

export default CastList;
