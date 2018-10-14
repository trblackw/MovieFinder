import { combineReducers } from "redux";
import MoviesReducer from "./components/movies/movies_reducer";

const rootReducer = combineReducers({
  MoviesReducer
});

export default rootReducer;
