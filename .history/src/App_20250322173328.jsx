import "react-multi-carousel/lib/styles.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchMovie from "./pages/SearchMovie";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
