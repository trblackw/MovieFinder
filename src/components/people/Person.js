import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

const PersonMovies = ({ movies }) => {
  return (
    <Details>
      <summary
        style={{
          color: "whitesmoke"
        }}
      >
        Movies
      </summary>
      {movies.map(movie => (
        <Link key={movie.id} to={`/${movie.id}`}>
          <P>{movie.title}</P>
        </Link>
      ))}
    </Details>
  );
};

const Person = ({ name, movies, image }) => {
  return (
    <div>
      <p
        style={{
          color: "hsl(196, 82%, 60%)",
          fontWeight: "bolder"
        }}
      >
        {name}
      </p>
      <img src={`${POSTER_PATH}${image}`} alt={{ name }} />

      <PersonMovies movies={movies} />
    </div>
  );
};

export default Person;

const P = styled.p`
  color: whitesmoke;
  text-decoration: none;
  font-weight: lighter;
  font-style: italic;
  font-size: 0.9em;
  &:hover {
    color: hsl(196, 82%, 60%);
  }
`;

const Details = styled.details`
  summary::-webkit-details-marker {
    display: none;
  }
  summary:before {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    content: "";
    background-image: url(http://cdn.onlinewebfonts.com/svg/img_113936.png);
    background: no-repeat:
    background-position: 0 0;
  }
`;
