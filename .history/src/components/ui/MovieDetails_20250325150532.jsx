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
      {/* <div>
        <div className="relative mt-30">
          <img
            src={BACKDROP_PATH + movie?.backdrop_path}
            alt=""
            className="opacity-50 -z-10 h-[565px] w-screen object-cover"
          />
          <div className="">
            <img
              src={POSTER_PATH + movie?.poster_path}
              alt=""
              className="w-75 h-100 rounded-xl"
            />
          </div>
        </div>
      </div> */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKDROP_PATH + movie?.backdrop_path})`,
        }}
      >
        {/* Overlay chỉ áp dụng lên background */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Nội dung phía trước */}
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
