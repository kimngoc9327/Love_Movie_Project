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
        backgroundImage: `linear-gradient(to bottom right, rgba(31.5, 31.5, 31.5, 1), rgba(31.5, 31.5, 31.5, 0.84)), url(${
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
          <div>Release date: {movie?.release_date}</div>
          <div>Vote average: {movie?.vote_average}</div>
          <div>Status: {movie?.status}</div>
          <div>
            Genres:
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
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.any,
};

export default MovieDetails;
