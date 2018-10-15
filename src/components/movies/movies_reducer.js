import { FETCH_MOVIES, CHANGE_PAGE } from "./movies_actions";

const initialState = {
  pages: [],
  activePage: 0
};

export default function(state = initialState, action) {
  const { type, pages } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pages,
        activePage: pages[0]
      };
    default:
      return state;
  }
}
