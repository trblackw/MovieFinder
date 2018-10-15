import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMovies, changePage } from "./movies_actions";

class MovieList extends Component {
  mapMovieData = page =>
    page.map(movie => (
      <Movie key={movie.id} movie={movie} img={movie.poster_path} />
    ));

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const [page1, page2, page3] = this.props.pages;
     const { changePage, activePage, pages } = this.props;
    return (
      <Fragment>
        <Pages>
          <li>
            <button
              onClick={() => changePage(pages, pages.indexOf(page1))}
              className="page"
            >
              Page 1
            </button>
          </li>
          <li>
            <button
              onClick={() => changePage(pages, pages.indexOf(page2))}
              className="page"
            >
              Page 2
            </button>
          </li>
          <li>
            <button onClick={() => changePage(pages, pages.indexOf(page3))} className="page">
              Page 3
            </button>
          </li>
        </Pages>
        <MovieGrid>
          {activePage.length ? (
            this.mapMovieData(activePage)
          ) : (
            <div>LOADING...</div>
          )}
        </MovieGrid>
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.array),
  activePage: PropTypes.array
};

const mapStateToProps = state => ({
  pages: state.MoviesReducer.pages,
  activePage: state.MoviesReducer.activePage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchMovies, changePage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;

const Pages = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  margin: 0 0.5em;

  li {
    font-size: 0.8em;
    list-style: none;
    margin-right: 0.5em;
    color: whitesmoke;
  }
  li:hover,
  li:active {
    color: hsl(196, 82%, 60%);
    cursor: pointer;
  }
`;
