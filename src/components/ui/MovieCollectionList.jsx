import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Fragment } from "react";

// Component that displays a list of movie collections in a swiper (carousel)
function MovieCollectionList({ collection }) {
  const navigate = useNavigate();

  // Navigate to the selected movie's details page
  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
  };
  return (
    <>
      {collection ? (
        <div className="my-10">
          <p className="text-white text-3xl font-medium mb-6">Collection</p>
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
                slidesPerView: 3,
                spaceBetween: 2,
              },
              768: {
                // Tablets
                slidesPerView: 4,
                spaceBetween: 2,
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
            className=" !mx-0"
          >
            {/* Render movie cards for each part of the collection */}
            {collection?.parts?.map((part, index) => (
              <SwiperSlide
                key={index}
                onClick={() => handleSelectMovie(part?.id)}
              >
                <MovieCard
                  title={part?.title}
                  poster={POSTER_PATH + part?.poster_path}
                  vote={Number(part?.vote_average.toFixed(2))}
                />
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

MovieCollectionList.propTypes = {
  collection: PropTypes.any,
};

export default MovieCollectionList;
