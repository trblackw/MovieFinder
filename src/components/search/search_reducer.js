import { FETCH_SEARCH, CLEAR_SEARCH, HANDLE_SEARCH } from "./search_actions";

const initialState = {
  movies: [],
  query: ""
};

export default function(state = initialState, action) {
  const { movies, type, query } = action;
  switch (type) {
    case FETCH_SEARCH:
      return {
        ...state,
        movies
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        movies
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query
      };
    default:
      return state;
  }
}
