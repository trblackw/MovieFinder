import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Movie from "./Movie";
// import { NavLink } from "react-router-dom";

const API_KEY = process.env.API_KEY;
const pageOne = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const pageTwo = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
const pageThree = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`;

class MovieList extends Component {
  state = {
    pages: [],
    activePage: []
  };

  mapMovieData = page =>
    page.map(movie => (
      <Movie key={movie.id} movie={movie} img={movie.poster_path} />
    ));

  selectPage = e => {
    this.setState({
      activePage: e.target.value
    });
    console.log(this.state.activePage);
  };

  async componentDidMount() {
    try {
      const movieRes = await Promise.all([
        fetch(pageOne),
        fetch(pageTwo),
        fetch(pageThree)
      ]).then(responses => Promise.all(responses.map(res => res.json())));
      const pages = movieRes.map(page => page.results);

      this.setState({
        pages,
        activePage: pages[0]
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const [page1, page2, page3] = this.state.pages;
    return (
      <div>
        <Pages>
          <li
            onClick={() => this.setState({ activePage: page1 })}
            className="page"
          >
            Page 1
          </li>
          <li
            onClick={() => this.setState({ activePage: page2 })}
            className="page"
          >
            Page 2
          </li>
          <li
            onClick={() => this.setState({ activePage: page3 })}
            className="page"
          >
            Page 3
          </li>
        </Pages>
        <MovieGrid>
          {this.state.activePage.length ? (
            this.mapMovieData(this.state.activePage)
          ) : (
            <div>LOADING...</div>
          )}
        </MovieGrid>
      </div>
    );
  }
}

MovieList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.array),
  activePage: PropTypes.array
};

export default MovieList;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  padding: 2em;
  margin: 0 auto;
  overflow-x: scroll;
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
