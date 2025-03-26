import axios from "axios";
import { GET_MOVIES, GET_MOVIE } from "./types";

const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=1a6043d947b8611272f1b9a41ed990bd`,
      {
        headers: { Authorization: `Bearer ${import.meta.API_TOKEN}` },
      }
    );
    dispatch({ type: GET_MOVIES, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

const getMovie = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/12?append_to_response=videos,images&api_key=1a6043d947b8611272f1b9a41ed990bd`,
      {
        headers: { Authorization: `Bearer ${import.meta.API_TOKEN}` },
      }
    );
    dispatch({ type: GET_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export { getMovies, getMovie };
