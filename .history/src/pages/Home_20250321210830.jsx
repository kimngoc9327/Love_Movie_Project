import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MovieList
        category={"now_playing"}
        sectionTitle={"Phim Đang Chiếu"}
        params={{}}
      />
      <MovieList
        category={"upcoming"}
        sectionTitle={"Phim Sắp Chiếu"}
        params={{}}
      />
      <MovieList category={"top_rated"} sectionTitle={"Phim nổi bật"} />
    </div>
  );
}

export default Home;
