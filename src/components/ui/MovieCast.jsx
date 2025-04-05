import PropTypes from "prop-types";
import { DEFAULT_IMAGE, POSTER_PATH } from "../../constants/constants";

// Component that displays a movie cast's profile picture and name
function MovieCast({ cast }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={
          cast?.profile_path ? POSTER_PATH + cast?.profile_path : DEFAULT_IMAGE
        }
        className="w-37.5 h-37.5 rounded-[50%] object-cover max-lg:w-36 max-lg:h-36"
      />
      <p className="text-white">{cast?.name}</p>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.any,
};

export default MovieCast;
