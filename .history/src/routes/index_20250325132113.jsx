import DefaultLayout from "../components/layout/DefaultLayout";
import Home from "../pages/Home";
import MovieCategory from "../pages/MovieCategory";
import Movie from "../pages/Movie";
import MovieGenre from "../pages/MovieGenre";
// import SearchMovie from "../pages/SearchMovie";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/genre", component: MovieGenre, layout: DefaultLayout },
  { path: "/movieCategory", component: MovieCategory, layout: DefaultLayout },
  { path: "/movie", component: Movie, layout: DefaultLayout },
];

export default publicRoutes;
