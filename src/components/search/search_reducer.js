import { FETCH_SEARCH } from "./search_actions";

const initialState = {
  movies: [],
};

export default function(state = initialState, action) {
  const { movies, type } = action;
  switch (type) {
    case FETCH_SEARCH:
      return {
        ...state,
        movies
      };
    default:
      return state;
  }
}
