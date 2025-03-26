import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="mx-8">
        <MovieList
          category={"now_playing"}
          sectionTitle={"Phim Đang Chiếu"}
          params={{ page: 2 }}
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
    </div>
  );
}

export default Home;
