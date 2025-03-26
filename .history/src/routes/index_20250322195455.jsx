import DefaultLayout from "../components/layout/DefaultLayout";
import Home from "../pages/Home";
import MovieCategory from "../pages/MovieCategory";
import MovieDetails from "../pages/MovieDetails";
import SearchMovie from "../pages/SearchMovie";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/search", component: SearchMovie, layout: DefaultLayout },
  { path: "/list", component: MovieCategory, layout: DefaultLayout },
  { path: "/movieDetails", component: MovieDetails, layout: DefaultLayout },
];

export default publicRoutes;
