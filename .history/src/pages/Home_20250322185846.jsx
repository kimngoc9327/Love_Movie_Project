import MovieList from "../components/ui/MovieList";
import Banner from "../components/ui/Banner";
function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
