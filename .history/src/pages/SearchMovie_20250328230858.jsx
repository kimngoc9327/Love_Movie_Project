import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { searchMovie } from "../redux/actions/movieActions";
import MovieCard from "../components/ui/MovieCard";
import { POSTER_PATH } from "../constants/constants";
import PaginationButton from "../components/ui/PaginationButton";

function SearchMovie() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const movies = useSelector((state) => state.movieReducer.search);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      const params = {
        page: page,
        query: query,
      };
      dispatch(searchMovie(params));
    }
  }, [dispatch, query, page]);

  useEffect(() => {
    console.log(movies);
  });

  const totalPages = movies?.total_pages;

  const handleSelectMovie = (id) => {
    navigate(`/movie?id=${id}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-8 m-24 mb-12">
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
  );
}

export default SearchMovie;
