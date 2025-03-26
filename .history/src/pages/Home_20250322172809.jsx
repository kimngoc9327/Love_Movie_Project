import Header from "../components/layout/Header";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
import Footer from "../components/layout/Footer";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="mx-8">
        <MovieList
          category={"now_playing"}
          sectionTitle={"Now Playing"}
          params={{ page: 2 }}
        />
        <MovieList category={"popular"} sectionTitle={"Popular"} params={{}} />
        <MovieList
          category={"top_rated"}
          sectionTitle={"Top Rated"}
          params={{}}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
