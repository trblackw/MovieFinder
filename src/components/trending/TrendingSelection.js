import React, { Component, Fragment } from "react";
import Movie from "../movies/Movie";
import { MovieGrid } from "../movies/MovieList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTrending } from "./trending_actions";

class TrendingSelection extends Component {
  componentDidMount() {
    const { fetchTrending } = this.props;
    fetchTrending();
  }

  render() {
    const { movies, shows } = this.props;
    return (
      <Fragment>
        <h2 style={{ color: "whitesmoke", margin: "0 1em" }}>Movies</h2>
        <MovieGrid>
          {movies.map(movie => (
            <Movie key={movie.id} title={movie.title} movie={movie} />
          ))}
        </MovieGrid>
        <h2 style={{ color: "whitesmoke", margin: "0 1em" }}>TV Shows</h2>
        <MovieGrid>
          {shows.map(show => (
            <Movie key={show.id} title={show.name} show={show} />
          ))}
        </MovieGrid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.TrendingReducer.trendingMovies,
  shows: state.TrendingReducer.trendingTVShows
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTrending }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingSelection);
