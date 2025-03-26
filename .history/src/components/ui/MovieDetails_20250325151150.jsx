import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovie } from "../../redux/actions/movieActions";
import { BACKDROP_PATH, POSTER_PATH } from "../../constants/constants";

function MovieDetails() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.currentMovie);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idMovie = queryParams.get("id");

  useEffect(() => {
    if (idMovie) {
      dispatch(getMovie(idMovie));
    }
  }, [dispatch, idMovie]);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <div>
      <div
        className=" relative flex items-center w-full h-[500px] bg-cover bg-center mt-30"
        style={{
          backgroundImage: `url(${BACKDROP_PATH + movie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 brightness-50"></div>

        <img
          src={POSTER_PATH + movie?.poster_path}
          alt=""
          className="relative z-10 w-75 h-100 rounded-xl"
        />
      </div>
    </div>
  );
}

export default MovieDetails;
