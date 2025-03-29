import PropTypes from "prop-types";
import MovieCast from "./MovieCast";

function CastList({ movie }) {
  return (
    <div>
      {movie?.casts?.map((cast, index) => (
        <div key={index}>
          <MovieCast cast={cast} />
        </div>
      ))}
    </div>
  );
}

CastList.propTypes = {
  movie: PropTypes.any,
};

export default CastList;
