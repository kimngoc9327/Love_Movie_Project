import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Fragment } from "react";

function MovieCollectionList({ collection }) {
  const navigate = useNavigate();
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
            modules={[Navigation]}
            className=" !mx-0"
          >
            {collection?.parts?.map((part, index) => (
              <SwiperSlide
                key={index}
                onClick={() => handleSelectMovie(part?.id)}
              >
                <MovieCard
                  title={part?.title}
                  poster={POSTER_PATH + part?.poster_path}
                  vote={part.vote_average}
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
