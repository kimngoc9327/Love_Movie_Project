import PropTypes from "prop-types";
import { POSTER_PATH } from "../../constants/constants";

function MovieCast({ cast }) {
  return (
    <div>
      <img
        src={POSTER_PATH + cast?.profile_path}
        alt=""
        className="w-37.5 h-37.5 rounded-[50%]"
      />
      <p>{cast?.name}</p>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.any,
};

export default MovieCast;
