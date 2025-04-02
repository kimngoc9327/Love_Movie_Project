import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/ui/MovieCard";
import { POSTER_PATH } from "../constants/constants";
import { useEffect, useState } from "react";
import { getMovieDiscover } from "../redux/actions/movieActions";
import { useLocation, useNavigate } from "react-router-dom";
import PaginationButton from "../components/ui/PaginationButton";
import MovieFilterBar from "../components/ui/MovieFilterBar";
import Notice from "../components/ui/Notice";

function MovieGenre() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movieReducer.movies);
  const queryParams = new URLSearchParams(location.search);

  const genreId = queryParams.get("with_genres");
  const country = queryParams.get("with_origin_country");
  const year = queryParams.get("year");
  const sortBy = queryParams.get("sort_by");

  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = {
      with_genres: genreId || "",
      with_origin_country: country || "",
      year: year || "",
      sort_by: sortBy || "",
      page: page,
    };

    dispatch(getMovieDiscover(params));
  }, [dispatch, genreId, country, year, sortBy, page]);

  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
  };

  const totalPages = movies?.total_pages;
  const maxPages = Math.min(totalPages, 500);
  return (
    <div className="m-20 max-lg:m-5">
      <Notice />
      <div className="flex flex-col items-center  mt-5">
        <MovieFilterBar />
        <div className="grid grid-cols-4 gap-2 my-12  max-lg:grid-cols-2">
          {movies?.results
            ?.filter((movie) => movie.title && movie.poster_path)
            .map((movie) => (
              <div key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
                <MovieCard
                  title={movie.title}
                  poster={POSTER_PATH + movie.poster_path}
                  vote={Number(movie?.vote_average.toFixed(2))}
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
    </div>
  );
}

export default MovieGenre;
