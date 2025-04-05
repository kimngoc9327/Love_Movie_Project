import PropTypes from "prop-types";
import MovieCast from "./MovieCast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Fragment } from "react";

// CastList component displays a carousel of top-billed cast members.
function CastList({ movie }) {
  return (
    <>
      {movie?.casts?.cast ? (
        <div className=" my-10">
          <p className="text-white text-3xl font-medium  mb-6">
            Top Billed Cast
          </p>
          {/* Swiper carousel for movie casts */}
          <Swiper
            spaceBetween={1}
            slidesPerView={6}
            navigation
            breakpoints={{
              320: {
                // Mobile
                slidesPerView: 2,
                spaceBetween: 2,
              },
              480: {
                // Small tablets
                slidesPerView: 4,
                spaceBetween: 1,
              },
              768: {
                // Tablets
                slidesPerView: 4,
                spaceBetween: 1,
              },
              1024: {
                // Desktops
                slidesPerView: 4,
                spaceBetween: 2,
              },
              1280: {
                // Larger screens
                slidesPerView: 5,
                spaceBetween: 2,
              },
            }}
            modules={[Navigation]}
            className="w-260 !mx-0 max-lg:w-full"
          >
            {movie?.casts?.cast?.map((cast, index) => (
              <SwiperSlide key={index}>
                <MovieCast cast={cast} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Fragment />
      )}
    </>
  );
}

CastList.propTypes = {
  movie: PropTypes.any,
};

export default CastList;
