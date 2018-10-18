import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from "./movies_actions";

const initialState = {
  pages: [],
  details: []
};
export default function(state = initialState, action) {
  const { type, pages, details } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pages
      };
   //  case FETCH_MOVIE_DETAILS:
   //    return {
   //      ...state,
   //      details
   //    };
    default:
      return state;
  }
  //   if (type === FETCH_MOVIES) {
  //     return { ...state, pages };
  //   }
  //   if (type === FETCH_MOVIE_DETAILS) {
  //     return { ...state, details };
  //   }
  //   return state;
};

