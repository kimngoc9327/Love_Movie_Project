// import axios from "axios";
// import { GET_MOVIES, GET_MOVIE } from "./types";

// const getMovies = () => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/week?api_key=1a6043d947b8611272f1b9a41ed990bd`,
//       {
//         headers: { Authorization: `Bearer ${import.meta.API_TOKEN}` },
//       }
//     );
//     dispatch({ type: GET_MOVIES, payload: response.data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getMovie = () => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?append_to_response=videos,translations&api_key=1a6043d947b8611272f1b9a41ed990bd`,
//       {
//         headers: {
//            Authorization: `Bearer ${import.meta.API_TOKEN}` },
//       }
//     );
//     dispatch({ type: GET_MOVIE, payload: response.data });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export { getMovies, getMovie };

import axios from "axios";
import { GET_MOVIES, GET_MOVIE } from "./types";
import { API_KEY, AUTH_TOKEN, BASE_URL } from "../constants/constants";

const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        params: {
          //   api_key: API_KEY,
          //   language: "en-US",
          page: 2,
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
          page: 1,
        },
      }
    );

    dispatch({ type: GET_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export { getMovies, getMovie };
