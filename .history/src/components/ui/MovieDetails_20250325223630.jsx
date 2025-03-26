import PropTypes from "prop-types";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieDiscover } from "../../redux/actions/movieActions";

function MovieDetails({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (genreId) => {
    dispatch(getMovieDiscover(genreId));
    navigate(`/genre?genre=${genreId}`);
  };
  return (
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
          <div>
            <p>Release date:</p> <p>{movie?.release_date}</p>
          </div>
          <div>
            <p>Vote average:</p> <p>{movie?.vote_average}</p>
          </div>
          <div>
            <p>Status:</p> <p>{movie?.status}</p>
          </div>
          <div>
            <p>Genres:</p>
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
          <div>
            <p>Overview:</p> <p>{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.any,
};

export default MovieDetails;
