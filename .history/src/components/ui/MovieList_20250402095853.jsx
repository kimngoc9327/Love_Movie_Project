import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovie, getMovies } from "../../redux/actions/movieActions";
import MovieCard from "./MovieCard";
import { POSTER_PATH } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MovieList({ category, sectionTitle, params = {} }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movieReducer.movies[category]);

  useEffect(() => {
    dispatch(getMovies(category, params));
  }, [dispatch, category, params]);

  const handleSelectCategory = (category) => {
    dispatch(getMovies(category));
    navigate(`/movieCategory?category=${category}`);
  };

  useEffect(() => {
    console.log(movies);
  });

  const handleSelectMovie = (id) => {
    dispatch(getMovie(id));
    navigate(`/movie?id=${id}`);
  };

  return (
    <div className="m-6 max-lg:m-1">
      <div className="flex justify-between mt-10 mb-6 text-white max-lg:mt-5">
        <div className="relative h-[35px] w-30   bg-red-500">
          <p className=" text-center min-w-[120px]  h-full pt-1 font-medium">
            {sectionTitle}
          </p>
        </div>
        <div
          className="flex space-x-1 items-center hover:text-[#3274D9] hover:cursor-pointer"
          onClick={() => handleSelectCategory(category)}
        >
          <p>See All</p>
          <i className="ri-arrow-right-double-fill text-xl"></i>
        </div>
      </div>

      <Swiper
        spaceBetween={2}
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
      >
        {movies?.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleSelectMovie(movie.id)}
            >
              <MovieCard
                title={movie?.title}
                poster={POSTER_PATH + movie?.poster_path}
                vote={Number(movie?.vote_average.toFixed(2))}
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
