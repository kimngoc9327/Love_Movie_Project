import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { useSelector } from "react-redux";
import MoiveCard from "./MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <i
      onClick={() => {
        onClick();
      }}
      className="ri-arrow-right-s-line text-white text-2xl"
    />
  );

  CustomLeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <i
        className="ri-arrow-left-s-line text-white text-2xl"
        onClick={() => {
          onClick();
        }}
      />
    );
  };

  CustomRightArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  return (
    <div className="m-6">
      <div className="relative h-[35px] w-30 mb-10 bg-red-500 ">
        <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
        <p className="text-white text-center w-full h-full pt-1 font-medium ">
          Phim hot
        </p>
      </div>

      <Carousel
        additionalTransfrom={0}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="flex space-x-2 ">
          {movies.results
            ?.filter((movie) => movie.title && movie.poster_path)
            .map((movie) => (
              <div key={movie.id}>
                <MoiveCard
                  title={movie.title}
                  poster={IMAGE_PATH + movie.poster_path}
                />
              </div>
            ))}
        </div>
      </Carousel>
    </div>
  );
}

export default MovieList;
