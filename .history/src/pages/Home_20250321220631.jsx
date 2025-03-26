import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
}

export default Home;
