import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Suggestions extends Component {
  render() {
    const { search, movies } = this.props;
    return (
      <StyledUl>
        {search.length >= 2 &&
          movies.map(movie => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/${movie.id}`}
              key={movie.id}
            >
              <li>{movie.title}</li>
            </Link>
          ))}
      </StyledUl>
    );
  }
}

Suggestions.propTypes = {
  search: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Suggestions;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;

  li {
    list-style: none;
    background: #eee;
    border-bottom: 1px solid #d8d8d8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    display: flex;
    justify-content: space-between;
  }

  li:hover {
    color: hsl(196, 82%, 60%);
  }
`;
