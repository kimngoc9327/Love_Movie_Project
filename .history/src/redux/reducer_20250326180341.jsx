import { combineReducers } from "redux";
import movieReducer from "./reducer/movieReducer";

export const rootReducer = combineReducers({
  movieReducer,
});
