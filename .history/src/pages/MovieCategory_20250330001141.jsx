import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getMovies } from "../redux/actions/movieActions";
import MovieCard from "../components/ui/MovieCard";
import { POSTER_PATH } from "../constants/constants";
import PaginationButton from "../components/ui/PaginationButton";
import MovieFilterBar from "../components/ui/MovieFilterBar";
import Notice from "../components/ui/Notice";

function MovieCategory() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
  };

  return (
    <div className="m-20">
      <Notice />
      <div className="flex flex-col items-center ">
        <MovieFilterBar />
        <div className="grid grid-cols-4 gap-8  my-12">
          {movies?.results
            ?.filter((movie) => movie.title && movie.poster_path)
            .map((movie) => (
              <div onClick={() => handleSelectMovie(movie?.id)} key={movie.id}>
                <MovieCard
                  title={movie?.title}
                  poster={POSTER_PATH + movie?.poster_path}
                  vote={Number(movie?.vote_average.toFixed(2))}
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
    </div>
  );
}

export default MovieCategory;
