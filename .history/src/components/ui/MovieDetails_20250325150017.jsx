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
      <div>
        <div className="relative mt">
          <img
            src={BACKDROP_PATH + movie?.backdrop_path}
            alt=""
            className="opacity-50 -z-10 h-[565px] w-screen"
          />
          <div className="">
            <img src={POSTER_PATH + movie?.poster_path} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
