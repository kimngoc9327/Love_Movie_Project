import axios from "axios";
import {
  GET_MOVIES,
  GET_MOVIE,
  GET_MOVIE_DISCOVER,
  GET_GENRE_MOVIE,
} from "../types";
import { AUTH_TOKEN, BASE_URL } from "../../constants/constants";

const getMovies =
  (category, params = {}) =>
  async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${category}`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        params: {
          ...params,
        },
      });

      dispatch({ type: GET_MOVIES, payload: response.data, category });
    } catch (error) {
      console.error(error);
    }
  };

const getMovieDiscover =
  (params = {}) =>
  async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/discover/movie`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        params: {
          ...params,
        },
      });

      dispatch({ type: GET_MOVIE_DISCOVER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

const getGenreMovie = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    dispatch({ type: GET_GENRE_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

const getMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      params: {
        append_to_response: "videos,translations,casts",
        language: "en-US",
      },
    });

    dispatch({ type: GET_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export { getMovies, getMovie, getMovieDiscover, getGenreMovie };
