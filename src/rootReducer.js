import { combineReducers } from "redux";
import MoviesReducer from "./components/movies/movies_reducer";
import PeopleReducer from "./components/people/people_reducer";
import TrendingReducer from "./components/trending/trending_reducer";
import SearchReducer from "./components/search/search_reducer";
import GenresReducer from "./components/genres/genre_reducer";

const rootReducer = combineReducers({
  MoviesReducer,
  PeopleReducer,
  TrendingReducer,
  SearchReducer,
  GenresReducer
});

export default rootReducer;
