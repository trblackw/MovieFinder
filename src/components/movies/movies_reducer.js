import {
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
  CHANGE_PAGE
} from "./movies_actions";

const initialState = {
  pages: [],
  activePage: 0,
  string: ""
};

export default function(state = initialState, action) {
  const { type, pages, page, string } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pages,
        activePage: pages[0]
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        string
      };
    case CHANGE_PAGE:
      return {
        ...state,
        activePage: page
      };
    default:
      return state;
  }
}
