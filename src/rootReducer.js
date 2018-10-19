import { combineReducers } from "redux";
import MoviesReducer from "./components/movies/movies_reducer";
import PeopleReducer from "./components/people/people_reducer";
import TrendingReducer from "./components/trending/trending_reducer";

const rootReducer = combineReducers({
  MoviesReducer,
  PeopleReducer,
  TrendingReducer
});

export default rootReducer;
