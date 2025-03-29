import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { POSTER_PATH } from "../../constants/constants";

function MovieCollection({ collection }) {
  return (
    <div>
      <p>Collection</p>
      {collection?.parts?.map((part, index) => (
        <MovieCard
          key={index}
          title={part?.title}
          poster={POSTER_PATH + part?.poster_path}
          vote={part.vote_average}
        />
      ))}
    </div>
  );
}

MovieCollection.propTypes = {
  collection: PropTypes.any,
};

export default MovieCollection;
