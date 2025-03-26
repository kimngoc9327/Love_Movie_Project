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
        category={"popular"}
        sectionTitle={"Phim Nổi Tiếng"}
        params={{}}
      />
      <MovieList
        category={"top_rated"}
        sectionTitle={"Đánh Giá Cao"}
        params={{}}
      />
    </div>
  );
}

export default Home;
