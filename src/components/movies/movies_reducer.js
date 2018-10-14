import { FETCH_MOVES } from "./movies_actions";

const initialState = {
  pages: []
};

export default function(state = initialState, action) {
  const { type, pages } = action;
  switch (type) {
    case FETCH_MOVES:
      return {
        ...state,
        pages
      };
    default:
      return state;
  }
}
