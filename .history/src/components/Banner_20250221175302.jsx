import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions";
import { useEffect } from "react";

function Banner() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies updated:", movie.belongs_to_collection);
  });

  return (
    <div>
      <img src="https://image.tmdb.org/t/p/original/xwggrEugjcJDuabIWvK2CpmK91z.jpg" />
    </div>
  );
}

export default Banner;
