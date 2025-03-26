import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { useSelector } from "react-redux";
import MoiveCard from "./MoiveCard";
import { IMAGE_PATH } from "../constants/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="m-6">
        <div className="relative h-[35px] w-30 mb-10 bg-red-500 ">
          <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
          <p className="text-white text-center w-full h-full pt-1 font-medium ">
            Phim hot
          </p>
        </div>
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
      </div>
    </Carousel>
  );
}

export default MovieList;
