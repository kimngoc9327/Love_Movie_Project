import {
  GET_GENRE_MOVIE,
  GET_MOVIE,
  GET_MOVIE_COLLECTION,
  GET_MOVIE_DISCOVER,
  GET_MOVIES,
  GET_RECOMMENDATIONS,
  SEARCH_MOVIE,
} from "../types";

const initialState = {
  movies: {},
  genres: {},
  search: {},
  recommendations: {},
  collection: null,
  currentMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, [action.category]: action.payload },
      };
    case GET_MOVIE_DISCOVER:
      return { ...state, movies: action.payload };
    case GET_MOVIE_COLLECTION:
      return { ...state, collection: action.payload };
    case GET_GENRE_MOVIE:
      return { ...state, genres: action.payload };
    case GET_RECOMMENDATIONS:
      return { ...state, recommendations: action.payload };
    case SEARCH_MOVIE:
      return { ...state, search: action.payload };
    case GET_MOVIE:
      return { ...state, currentMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
