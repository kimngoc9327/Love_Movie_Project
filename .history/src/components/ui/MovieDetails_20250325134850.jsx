import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovie } from "../../redux/actions/movieActions";
import { BACKDROP_PATH } from "../../constants/constants";

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
        <div
          style={{
            backgroundImage: `url(${BACKDROP_PATH + movie.backdrop_path})`,
          }}
        >
          {" "}
          <img src={BACKDROP_PATH + movie.backdrop_path} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
