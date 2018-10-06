import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w185";

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={String(movie.id)}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 30px white;
  &:hover {
    transform: scale(1.06);
    transition-duration: 300ms;
  }
`;
