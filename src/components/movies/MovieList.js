import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMovies } from "./movies_actions";

class MovieList extends Component {
  state = {
    activePage: 0
  };
  mapMovieData = page =>
    page.map(movie => (
      <Movie key={movie.id} movie={movie} img={movie.poster_path} />
    ));
  changePage = page => {
    this.setState({ activePage: page });
  };

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    //  const [page1, page2, page3] = this.props.pages;

    const { pages } = this.props;
    const { activePage } = this.state;
    return (
      <Fragment>
        <Pages>
          {pages.map((page, i) => (
            <li key={page[i].id}>
              <button
                onClick={() => this.changePage(i)}
                className={i === activePage ? "active" : "page"}
              >
                Page {i + 1}
              </button>
            </li>
          ))}
        </Pages>
        <MovieGrid>
          {pages[activePage] ? (
            this.mapMovieData(pages[activePage])
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
  activePage: PropTypes.number
};

const mapStateToProps = state => ({
  pages: state.MoviesReducer.pages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchMovies }, dispatch);

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
  margin: 0 1.6em;

  button.active {
    border: 1px solid hsl(0, 0%, 13%);
    color: hsl(0, 0%, 13%);
    background: hsl(196, 82%, 60%);
    border-radius: 4px;
    padding: 0.3em;
  }
  button.page {
    border-radius: 4px;
    border: 1px solid hsl(196, 82%, 60%);
    color: hsl(196, 82%, 60%);
    background: hsl(0, 0%, 13%);
    padding: 0.3em;
    &:hover {
      border: 1px solid hsl(0, 0%, 13%);
      color: hsl(0, 0%, 13%);
      background: hsl(196, 82%, 60%);
      cursor: pointer;
    }
  }

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
