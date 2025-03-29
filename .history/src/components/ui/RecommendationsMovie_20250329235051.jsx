import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { POSTER_PATH } from "../../constants/constants";
import { Fragment } from "react";

function RecommendationsMovie({ recommendations }) {
  const navigate = useNavigate();
  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
  };
  return (
    <>
      {recommendations ? (
        <div className="my-10">
          <p className="text-white text-3xl font-medium mb-6">
            Recommendations
          </p>
          <Swiper
            spaceBetween={1}
            slidesPerView={6}
            navigation
            modules={[Navigation]}
            className=" !mx-0"
          >
            {recommendations?.results?.map((recommendation, index) => (
              <SwiperSlide
                key={index}
                onClick={() => handleSelectMovie(recommendation?.id)}
              >
                <MovieCard
                  title={recommendation?.title}
                  poster={POSTER_PATH + recommendation?.poster_path}
                  vote={Number(recommendation?.vote_average.toFixed(2))}
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

RecommendationsMovie.propTypes = {
  recommendations: PropTypes.any,
};

export default RecommendationsMovie;
