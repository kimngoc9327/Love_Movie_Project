import PropTypes from "prop-types";
import { POSTER_PATH } from "../../constants/constants";

function MovieCast({ cast }) {
  return (
    <div className="flex flex-col items-center m-10">
      <img
        src={POSTER_PATH + cast?.profile_path}
        className="w-37.5 h-37.5 rounded-[50%] object-cover"
      />
      <p className="text-white">{cast?.name}</p>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.any,
};

export default MovieCast;
