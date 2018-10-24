import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieGrid } from "../movies/MovieList";
import Movie from "../movies/Movie";
import styled from "styled-components";

class MoviesByGenre extends Component {
  filterByGenre = genreId => {
    const { pages } = this.props;
    const results = pages
      .map(page => page)
      .map(page =>
        page.filter(movie => movie.genre_ids.includes(Number(genreId)))
      )
      .map(page => page.map(movie => movie))
      .flat()
      .sort();
    console.log(results);
    return results;
  };
  render() {
    const id = this.props.match.params.genreId;

    return (
      <MovieGrid>
        {this.filterByGenre(id).length ? (
          this.filterByGenre(id).map(movie => (
            <Movie key={movie.id} movie={movie} img={movie.poster_path} />
          ))
        ) : (
          <Alert>No current movies under that genre!</Alert>
        )}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.MoviesReducer.pages
});

export default connect(mapStateToProps)(MoviesByGenre);

const Alert = styled.h2`
  font-size: 2em;
  color: whitesmoke;
`;
