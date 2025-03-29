import PropTypes from "prop-types";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieDiscover } from "../../redux/actions/movieActions";
import PlayTrailerButton from "./PlayTrailerButton";
import { useState } from "react";
import formatTime from "../../utils/formatTime";
function MovieDetails({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  const handleSelect = (genreId) => {
    dispatch(getMovieDiscover(genreId));
    navigate(`/genre?genre=${genreId}`);
  };
  return (
    <>
      <div
        className="relative flex items-center w-full h-125  mt-20  bg-cover bg-center "
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 73%), rgb(143 143 143 / 84%)), url(${
            BACKDROP_PATH + movie?.backdrop_path
          })`,
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50 h-[500px]"></div>

        <div className="flex relative space-x-20 z-10  mx-20 w-full ">
          <img
            src={POSTER_PATH + movie?.poster_path}
            alt={movie?.title}
            className=" w-75 h-100 rounded-xl object-cover"
          />
          <div className="flex flex-col space-y-4 text-white text-left ">
            <div className="flex space-x-4 items-center">
              <p className="text-4xl font-bold">({movie?.title})</p>{" "}
              <p>{formatTime(movie?.runtime)}</p>
            </div>
            <div className="flex space-x-3 items-center">
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
              <p className="mr-13 text-lg">Release date:</p>{" "}
              <p>{movie?.release_date}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-12 text-lg">Vote average:</p>{" "}
              <p>{Number(movie?.vote_average.toFixed(2))}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-26 text-lg">Status:</p> <p>{movie?.status}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-22 text-lg">Genres:</p>
              {movie?.genres.map((genre) => (
                <span
                  className="px-3.5 py-1.5 bg-[#222e3a] hover:bg-amber-700 hover:cursor-pointer rounded-xl mx-1.5"
                  onClick={() => handleSelect(genre.id)}
                  key={genre}
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="flex ">
              <p className="mr-20 text-lg ">Overview:</p>{" "}
              <p className="text-justify">{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && trailer && (
        <div
          className="fixed flex w-screen h-screen top-0 bg-[#212121]/50 justify-center items-center z-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="md:w-[860px] h-[515px] rounded-lg shadow-lg"
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
