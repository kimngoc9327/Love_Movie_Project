import { useSelector } from "react-redux";
import MoiveCard from "../components/MoiveCard";
import { IMAGE_PATH } from "../constants/constants";

function SearchMovie() {
  const movies = useSelector((state) => state.movieReducer.movies);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <MoiveCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
