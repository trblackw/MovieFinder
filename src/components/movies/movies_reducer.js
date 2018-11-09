import { FETCH_MOVIES, ALPHABETIZE_MOVIES } from "./movies_actions";

const initialState = {
  pages: []
};
export default function(state = initialState, action) {
  const { type, pages, alphabetizedMovies } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pages
      };
    case ALPHABETIZE_MOVIES:
      return {
        ...state,
        pages: alphabetizedMovies
      };
    default:
      return state;
  }
}
