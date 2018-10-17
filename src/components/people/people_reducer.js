import { FETCH_PEOPLE } from "./people_actions";
const initialState = {
  people: []
};

export default function(state = initialState, action) {
  const { people, type } = action;
  switch (type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people
      };
    default:
      return state;
  }
}
