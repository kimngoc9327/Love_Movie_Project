import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { POSTER_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

function MovieCollectionList({ collection }) {
  const navigate = useNavigate();
  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
  };
  return (
    <div className="m-10">
      <p className="text-white text-3xl font-medium mb-6">Collection</p>
      <div className="flex space-x-4">
        {collection?.parts?.map((part, index) => (
          <div key={index} onClick={() => handleSelectMovie(part?.id)}>
            <MovieCard
              title={part?.title}
              poster={POSTER_PATH + part?.poster_path}
              vote={part.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

MovieCollectionList.propTypes = {
  collection: PropTypes.any,
};

export default MovieCollectionList;
