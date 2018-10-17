import { combineReducers } from "redux";
import MoviesReducer from "./components/movies/movies_reducer";
import PeopleReducer from "./components/people/people_reducer";

const rootReducer = combineReducers({
  MoviesReducer,
  PeopleReducer
});

export default rootReducer;
