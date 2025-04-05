import PropTypes from "prop-types";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieDiscover } from "../../redux/actions/movieActions";
import PlayTrailerButton from "./PlayTrailerButton";
import { useState } from "react";
import formatTime from "../../utils/formatTime";

// Component that displays detailed information of a movie, including trailer, genres, etc.
function MovieDetails({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // State to track trailer modal open/close
  const [isExpanded, setIsExpanded] = useState(false); // State to track description expansion
  const toggleExpand = () => setIsExpanded(!isExpanded); // Toggle expand description

  // Find the trailer video from movie's videos
  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  // Dispatch action to filter movies by genre and navigate to genre page
  const handleSelect = (genreId) => {
    dispatch(getMovieDiscover(genreId));
    navigate(`/genre?genre=${genreId}`);
  };
  return (
    <>
      <div
        className="relative flex items-center w-screen h-fit mt-5 py-4 bg-cover bg-center "
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 73%), rgb(143 143 143 / 84%)), url(${
            BACKDROP_PATH + movie?.backdrop_path
          })`,
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50 h-full"></div>

        <div className="relative space-x-20 z-10 mx-20 w-full max-lg:mx-5 md:flex md:items-center">
          <img
            src={POSTER_PATH + movie?.poster_path}
            alt={movie?.title}
            className=" w-75 h-100 rounded-xl object-cover max-lg:w-[90%]  max-lg:mb-4"
          />
          <div className="flex flex-col space-y-4 text-white text-left max-lg:w-full">
            <div>
              <p className="text-4xl font-bold max-lg:text-3xl ">
                {movie?.title}
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              {/* Icons for playlist, favorite, bookmark with tooltips */}
              <div className="relative group">
                <i className="ri-file-list-line text-white text-sm bg-[#002542] py-3 px-3.5 rounded-[50%] cursor-pointer"></i>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Playlist
                </span>
              </div>

              <div className="relative group">
                <i className="ri-heart-3-fill text-white text-sm bg-[#002542] py-3 px-3.5 rounded-[50%] cursor-pointer"></i>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Favorite
                </span>
              </div>

              <div className="relative group">
                <i className="ri-bookmark-fill text-white text-sm bg-[#002542] py-3 px-3.5 rounded-[50%] cursor-pointer"></i>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Bookmark
                </span>
              </div>

              <div className="relative group">
                <PlayTrailerButton
                  onClick={() => setIsOpen(true)}
                  disabled={!trailer}
                />
                {!trailer && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Trailer not found
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <p className="mr-13 max-lg:mr-10 text-lg">Release date:</p>{" "}
              <p>{movie?.release_date}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-21 max-lg:mr-18 text-lg">Runtime:</p>
              <p>{formatTime(movie?.runtime)}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-12 max-lg:mr-9 text-lg">Vote average:</p>{" "}
              <p>{Number(movie?.vote_average.toFixed(2))}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-26 max-lg:mr-23 text-lg">Status:</p>{" "}
              <p>{movie?.status}</p>
            </div>
            <div className="flex items-center">
              {/* Genre tags that navigate to genre filter */}
              <p className="mr-22 max-lg:mr-19 text-lg">Genres:</p>
              <div className="flex flex-wrap gap-2">
                {movie?.genres.map((genre, index) => (
                  <span
                    className="px-3.5 py-1.5 w-fit bg-[#222e3a] hover:bg-amber-700 cursor-pointer rounded-xl mx-1.5 "
                    onClick={() => handleSelect(genre.id)}
                    key={index}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex ">
              <p className="mr-20 max-lg:mr-17 text-lg ">Overview:</p>{" "}
              <div className="relative text-white max-w-md">
                <p
                  onClick={toggleExpand}
                  className={`text-justify ${
                    isExpanded ? "line-clamp-none" : "line-clamp-5"
                  }`}
                >
                  {movie?.overview}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className=" py-1 px-3 text-xs font-bold border border-white bg-black/50 backdrop-blur-sm rounded hover:bg-black/70 transition-colors duration-300"
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trailer modal */}
      {isOpen && trailer && (
        <div
          className="fixed flex w-screen h-screen top-0 bg-[#212121]/50 justify-center items-center z-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[860px] h-[515px] rounded-lg shadow-lg max-lg:w-[80%] max-lg:h-[200px]"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.any,
};

export default MovieDetails;
