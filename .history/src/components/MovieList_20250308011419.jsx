// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getMovies } from "../redux/actions";
// import { useSelector } from "react-redux";
// import MoiveCard from "./MoiveCard";
// import { IMAGE_PATH } from "../constants/constants";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// // import PropTypes from "prop-types";

// function MovieList() {
//   const dispatch = useDispatch();
//   const movies = useSelector((state) => state.movieReducer.movies);
//   useEffect(() => {
//     dispatch(getMovies());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log(movies);
//   }, [movies]);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//   };

//   // const CustomLeftArrow = ({ onClick }) => (
//   //   <i
//   //     onClick={() => {
//   //       onClick();
//   //     }}
//   //     className="ri-arrow-right-s-line text-xl text-white"
//   //   />
//   // );

//   // CustomLeftArrow.propTypes = {
//   //   onClick: PropTypes.func.isRequired, // Xác nhận onClick là một function và bắt buộc phải có
//   // };

//   // const CustomRightArrow = ({ onClick }) => {
//   //   return (
//   //     <i
//   //       className="ri-arrow-left-s-line text-xl text-white"
//   //       onClick={() => {
//   //         onClick();
//   //       }}
//   //     />
//   //   );
//   // };

//   // CustomRightArrow.propTypes = {
//   //   onClick: PropTypes.func.isRequired, // Xác nhận onClick là một function và bắt buộc phải có
//   // };

//   return (
//     <Carousel responsive={responsive} draggable={false} infinite>
//       <div className="m-6">
//         <div className="relative h-[35px] w-30 mb-10 bg-red-500 ">
//           <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
//           <p className="text-white text-center w-full h-full pt-1 font-medium ">
//             Phim hot
//           </p>
//         </div>
//         <div className="flex space-x-2 ">
//           {movies.results
//             ?.filter((movie) => movie.title && movie.poster_path)
//             .map((movie) => (
//               <div key={movie.id}>
//                 <MoiveCard
//                   title={movie.title}
//                   poster={IMAGE_PATH + movie.poster_path}
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     </Carousel>
//   );
// }

// export default MovieList;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
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
    console.log("Danh sách phim:", movies);
  }, [movies]);

  // Kiểm tra dữ liệu trước khi render
  if (!movies || !movies.results || movies.results.length === 0) {
    return <p className="text-center text-white">Đang tải phim...</p>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  // Nút điều hướng trái
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <i
        className="ri-arrow-left-s-line arrow-button left-2"
        onClick={() => onClick()}
      />
    );
  };

  // Nút điều hướng phải
  const CustomRightArrow = ({ onClick }) => {
    <i
      className="ri-arrow-right-s-line arrow-button right-2"
      onClick={() => onClick()}
    />;
  };
  CustomLeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired, // Xác nhận onClick là một function và bắt buộc phải có
  };

  CustomRightArrow.propTypes = {
    onClick: PropTypes.func.isRequired, // Xác nhận onClick là một function và bắt buộc phải có
  };
  return (
    <div className="p-6">
      <div className="relative h-[35px] w-30 mb-10 bg-red-500">
        <div className="absolute -right-[26px] w-0 h-0 border-t-[16px] border-t-transparent border-b-[20px] border-b-transparent border-l-[27px] border-red-500"></div>
        <p className="text-white text-center w-full h-full pt-1 font-medium">
          Phim hot
        </p>
      </div>

      <Carousel
        responsive={responsive}
        draggable={window.innerWidth > 1024 ? false : true}
        infinite={true} // Đảm bảo carousel luôn có item để hiển thị
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {movies.results
          .filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MoiveCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default MovieList;
