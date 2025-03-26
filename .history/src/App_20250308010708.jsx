import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <MovieList />
    </>
  );
}

export default App;
