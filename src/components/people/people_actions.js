export const FETCH_PEOPLE = "FETCH_PEOPLE";

export const fetchPeople = () => {
  const API_KEY = process.env.API_KEY;

  return async dispatch => {
    const peopleRes = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const people = await peopleRes.json();
    return dispatch({
      type: "FETCH_PEOPLE",
      people: people.results
    });
  };
};
