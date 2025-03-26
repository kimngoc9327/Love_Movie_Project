import MovieList from "../components/MovieList";

function Home() {
  return (
    <div>
      <MovieList category={"now_playing"} sectionTitle={"Phim Đang Chiếu"} />
      <MovieList category={"week"} sectionTitle={"Phim trong tuần"} />
    </div>
  );
}

export default Home;
