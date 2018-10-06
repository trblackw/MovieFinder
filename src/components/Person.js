import React from "react";
// import styled from "styled-components";

const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

const PersonMovies = ({ movies }) => {
  return (
    <details>
      <summary
        style={{
          color: "whitesmoke"
        }}
      >
        Movies
      </summary>
      {movies.map(movie => (
        <p
          style={{ color: "whitesmoke", fontWeight: "lighter" }}
          key={movie.id}
        >
          {movie.title}
        </p>
      ))}
    </details>
  );
};

const Person = ({ name, movies, image }) => {
  return (
    <div>
      <p
        style={{
          color: "red",
          fontWeight: "bolder"
        }}
      >
        {name}
      </p>
      <img src={`${POSTER_PATH}${image}`} alt={{name}} />

      <PersonMovies movies={movies} />
    </div>
  );
};

export default Person;
