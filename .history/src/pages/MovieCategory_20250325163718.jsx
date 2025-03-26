import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovies } from "../redux/actions/movieActions";
import MovieCard from "../components/ui/MovieCard";
import { POSTER_PATH } from "../constants/constants";
import PaginationButton from "../components/ui/PaginationButton";

function MovieCategory() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const movies = useSelector((state) => state.movieReducer.movies[category]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (category) {
      const params = {
        page: page,
      };
      dispatch(getMovies(category, params));
    }
  }, [dispatch, category, page]);

  const totalPages = movies?.total_pages;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-8 m-24 mb-12">
        {movies?.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                poster={POSTER_PATH + movie.poster_path}
              />
            </div>
          ))}
      </div>
      <PaginationButton
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default MovieCategory;
