// import Banner from "./components/Banner";
// import Header from "./components/Header";
// import MovieList from "./components/MovieList";
import "react-multi-carousel/lib/styles.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchMovie from "./pages/SearchMovie";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<SearchMovie />} />
      </Routes>
    </>
  );
}

export default App;
