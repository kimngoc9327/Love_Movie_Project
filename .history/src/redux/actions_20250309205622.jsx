import axios from "axios";
import { GET_MOVIES, GET_MOVIE } from "./types";
import { API_KEY, AUTH_TOKEN, BASE_URL } from "../constants/constants";

const getMovies = (category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${category}?api_key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );

    dispatch({ type: GET_MOVIES, payload: response.data });
  } catch (error) {
    console.error(error);
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

export { getMovies, getMovie };
