import {
  GET_GENRE_MOVIE,
  GET_MOVIE,
  GET_MOVIE_DISCOVER,
  GET_MOVIES,
} from "./types";

const initialState = {
  movies: {},
  genres: {},
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
    case GET_MOVIE:
      return { ...state, currentMovie: action.payload };
    case GET_GENRE_MOVIE:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
