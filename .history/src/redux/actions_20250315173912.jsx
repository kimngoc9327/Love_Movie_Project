import axios from "axios";
import { GET_MOVIES, GET_MOVIE, GET_MOVIE_DISCOVER } from "./types";
import { API_KEY, AUTH_TOKEN, BASE_URL } from "../constants/constants";

const getMovies =
  (category, params = {}) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${category}?api_key=${API_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
          params: {
            ...params,
          },
        }
      );

      dispatch({ type: GET_MOVIES, payload: response.data, category });
    } catch (error) {
      console.error(error);
    }
  };

const getMovieDiscover = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?with_genres=12&api_key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );

    dispatch({ type: GET_MOVIE_DISCOVER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

const getMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?append_to_response=videos,translations&api_key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        params: {
          append_to_response: "videos,translations",
          language: "en-US",
        },
      }
    );

    dispatch({ type: GET_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export { getMovies, getMovie, getMovieDiscover };
