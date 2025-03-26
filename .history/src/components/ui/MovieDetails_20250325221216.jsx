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
      className="relative flex items-center w-full h-125  mt-20 bg-cover bg-center "
      style={{
        backgroundImage: `url(${BACKDROP_PATH + movie?.backdrop_path})`,
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
          <p className="text-3xl font-bold">{movie?.title}</p>
          <p>Release date: {movie?.release_date}</p>
          <p>Vote average: {movie?.vote_average}</p>
          <p>Status: {movie?.status}</p>
          <p>
            Genres:{" "}
            {movie?.genres.map((genre) => (
              <span
                className="p-2 bg-[#222e3a] rounded-xl"
                onClick={() => handleSelect(genre.id)}
                key={genre}
              >
                {genre.name}
              </span>
            ))}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.any,
};

export default MovieDetails;
