import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchGenres } from "./genre_actions";

class GenreSelection extends Component {
  //   state = {
  //      genres: [],
  //      search: []
  //   };

  //   async componentDidMount() {
  //     try {
  //       const genreRes = await fetch(
  //         `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  //       );
  //        const genresList = await genreRes.json();

  //       this.setState({
  //         genres: genresList.genres
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  componentDidMount() {
    const { fetchGenres } = this.props;
    fetchGenres();
  }

  render() {
    const { genres } = this.props;

    return (
      <GenreContainer>
        <h2>Genre List</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>
              <StyledLink to="#">{genre.name}</StyledLink>
            </li>
          ))}
        </ul>
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
