import { useEffect } from "react";
import Header from "./components/Header";
import getMovies from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies updated:", movies);
  }, [movies]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
