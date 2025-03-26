import PropTypes from "prop-types";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";

function MovieDetails({ movie }) {
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
        <div className="text-white text-left ">
          <p className="text-3xl font-bold">{movie?.title}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.any,
};

export default MovieDetails;
