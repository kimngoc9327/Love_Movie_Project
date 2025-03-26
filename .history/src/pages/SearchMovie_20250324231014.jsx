import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/ui/MovieCard";
import { IMAGE_PATH } from "../constants/constants";
import { useEffect, useState } from "react";
import { getMovieDiscover } from "../redux/actions/movieActions";
import { useLocation } from "react-router-dom";
import PaginationButton from "../components/ui/PaginationButton";

function SearchMovie() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genreId = queryParams.get("genre"); // Lấy genreId từ URL
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (genreId) {
      const params = {
        with_genres: genreId,
        page: page,
      };
      dispatch(getMovieDiscover(params));
    }
  }, [dispatch, genreId, page]);

  const totalPages = movies?.total_pages;
  const maxPages = Math.min(totalPages, 500);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-8 m-24 mb-12">
        {movies?.results
          ?.filter((movie) => movie.title && movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                poster={IMAGE_PATH + movie.poster_path}
              />
            </div>
          ))}
      </div>

      <PaginationButton
        currentPage={page}
        onPageChange={setPage}
        totalPages={maxPages}
      />
    </div>
  );
}

export default SearchMovie;
