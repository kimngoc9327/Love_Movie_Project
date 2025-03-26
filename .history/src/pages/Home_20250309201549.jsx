import Header from "../components/Header";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <div>
      <Header />

      <MovieList category={"now_playing"} sectionTitle={"Phim Đang Chiếu"} />
      <MovieList category={"upcoming"} sectionTitle={"Phim Sắp Chiếu"} />
    </div>
  );
}

export default Home;
