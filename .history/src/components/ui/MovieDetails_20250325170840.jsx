import PropTypes from "prop-types";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";

function MovieDetails({ movie }) {
  return (
    <div>
      <div
        className="relative flex items-center w-full h-[500px] bg-cover bg-center mt-30"
        style={{
          backgroundImage: `url(${BACKDROP_PATH + movie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-25"></div>

        <div className="flex  justify-between mx-20 w-full text-white">
          <img
            src={POSTER_PATH + movie?.poster_path}
            alt={movie?.title}
            className="relative z-10 w-75 h-100 rounded-xl object-cover"
          />
          <div>
            <p>{movie.title}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
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
