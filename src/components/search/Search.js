import React, { Component } from "react";
import styled from "styled-components";
import Suggestions from "./Suggestions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchMovies, clearMovies, handleSearch } from "./search_actions";
// const API_KEY = process.env.API_KEY;

// const pageOne = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
// const pageTwo = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
// const pageThree = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`;
// const pageFour = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4`;

class Search extends Component {
  //   state = {
  //     query: "",
  //     movies: []
  //   };

  //   getMovies = async () => {
  //     try {
  //       const movieRes = await Promise.all([
  //         fetch(pageOne),
  //         fetch(pageTwo),
  //         fetch(pageThree),
  //         fetch(pageFour)
  //       ]).then(responses => Promise.all(responses.map(res => res.json())));
  //       const moviesArr = movieRes.map(page => page.results);
  //       const movies = [
  //         ...moviesArr[0],
  //         ...moviesArr[1],
  //         ...moviesArr[2],
  //         ...moviesArr[3]
  //       ];
  //       this.setState({
  //         movies
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   clearMovies = () => {
  //     this.setState({
  //       movies: []
  //     });
  //   };

  //   handleSearch = () => {
  //     this.setState(
  //       {
  //         query: this.search.value
  //       },
  //       () => {
  //         if (this.state.query && this.state.query.length > 1) {
  //           if (this.state.query.length % 2 === 0) {
  //             this.getMovies();
  //           }
  //         } else if (!this.state.query) {
  //           this.clearMovies();
  //         }
  //       }
  //     );
  //   };

  componentDidMount() {
    const { searchMovies, handleSearch, clearMovies } = this.props;
  }
  render() {
    const { movies, query, handleSearch } = this.props;
    console.log(movies);
    return (
      <SearchContainer>
        <SearchForm onSubmit={e => e.preventDefault()}>
          <input
            ref={input => (this.search = input)}
            type="text"
            placeholder="Search for a movie"
            onChange={handleSearch}
          />
          <Suggestions movies={movies} search={query} />
        </SearchForm>
      </SearchContainer>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired)
};

const mapStateToProps = state => ({
  movies: state.SearchReducer.movies,
  query: state.SearchReducer.query
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchMovies, clearMovies, handleSearch }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

const SearchContainer = styled.div`
  margin: 0 auto;
  justify-content: center;
  padding: 1.5em;
  text-align: center;
  height: 100vh;
  background: hsl(196, 82%, 60%);
`;

const SearchForm = styled.form`
  height: 100%;
  width: 100%;
  padding: 1em;
  max-width: 400px;
  margin: 0.5em auto;

  input {
    padding: 0.8em;
    width: 50%;
    margin: 0 auto 0.2em auto;
    text-align: center;
    outline: 0;
    border: 10px solid #f7f7f7;
    width: 120%;
    left: -10%;
    position: relative;
    top: 10px;
    z-index: 2;
    border-radius: 5px;
    font-size: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12),
      inset 0 0 2px rgba(145, 18, 18, 0.281);
  }
`;
