import PropTypes from "prop-types";
import MovieCast from "./MovieCast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function CastList({ movie }) {
  return (
    <div className="m-10">
      <p className="text-white text-3xl font-medium  mb-6">Top Billed Cast</p>
      <Swiper
        spaceBetween={1}
        slidesPerView={6}
        navigation
        modules={[Navigation]}
        className="w-250"
      >
        {movie?.casts?.cast?.map((cast, index) => (
          <SwiperSlide key={index}>
            <MovieCast cast={cast} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

CastList.propTypes = {
  movie: PropTypes.any,
};

export default CastList;
