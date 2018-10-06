import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Suggestions = ({ search, movies }) => {
  const findMatches = (query, data) => {
    return data
      .filter(item => {
        const regex = new RegExp(query, "gi");
        return item.title.match(regex);
      })
      .map(item => (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/${item.id}`}
          key={item.id}
        >
          <li>{item.title}</li>
        </Link>
      ));
  };
  return <StyledUl>{findMatches(search, movies)}</StyledUl>;
};

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
    color: red;
  }
`;
