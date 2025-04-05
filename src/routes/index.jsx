import DefaultLayout from "../components/layout/DefaultLayout";
import Home from "../pages/Home";
import MovieCategory from "../pages/MovieCategory";
import Movie from "../pages/Movie";
import SearchMovie from "../pages/SearchMovie";
import MovieFilter from "../pages/MovieFilter";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/filter", component: MovieFilter, layout: DefaultLayout },
  { path: "/movieCategory", component: MovieCategory, layout: DefaultLayout },
  { path: "/movie", component: Movie, layout: DefaultLayout },
  { path: "/search", component: SearchMovie, layout: DefaultLayout },
];

export default publicRoutes;
