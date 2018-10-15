import { FETCH_MOVIES, CHANGE_PAGE } from "./movies_actions";

const initialState = {
  pages: [],
  activePage: 0
};

export default function(state = initialState, action) {
  const { type, pages, page } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pages,
        activePage: pages[0]
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
