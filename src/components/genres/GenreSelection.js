import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchGenres } from "./genre_actions";
import MoviesByGenre from "./MoviesByGenre";

class GenreSelection extends Component {
  componentDidMount() {
    const { fetchGenres } = this.props;
    fetchGenres();
  }

  render() {
    const { genres, match } = this.props;
    console.log("match", match);
    return (
      <GenreContainer>
        <h2>Genre List</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>
              <StyledLink to={`${match.path}/${genre.id}`}>
                {genre.name}
              </StyledLink>
            </li>
          ))}
        </ul>
        <Route exact path={`${match.url}/:genreId`} component={MoviesByGenre} />
      </GenreContainer>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.GenresReducer.genres
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGenres }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreSelection);

const GenreContainer = styled.div`
  background: hsl(0, 0%, 10%);
  margin: 0 auto;
  text-align: center;
  padding: 1.5em;
  font-size: 1.8em;
  color: hsl(196, 82%, 60%);
  h2 {
    font-size: 2.2em;
    font-weight: bolder;
  }
  ul li {
    border-bottom: 1px solid black;
    list-style: none;
    padding: 1em 0 1em 0;
  }
  ul li:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: hsl(196, 82%, 60%);
  &:hover {
    color: whitesmoke;
    cursor: pointer;
  }
`;
