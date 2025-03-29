import PropTypes from "prop-types";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieDiscover } from "../../redux/actions/movieActions";
import WatchTrailerButton from "./WatchTrailerButton";
import { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import ReactModal from "react-modal";
function MovieDetails({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  ReactModal.setAppElement("#root");

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
            <div className="text-4xl font-bold">{movie?.title}</div>
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
            <WatchTrailerButton onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        {trailer && (
          <div className="flex items-center justify-center mt-5">
            {" "}
            <YouTube videoId={trailer} opts={opts} />
          </div>
        )}
      </Modal>
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.any,
};

export default MovieDetails;
