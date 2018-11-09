import React, { Component } from "react";
import styled from "styled-components";
import Suggestions from "./Suggestions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    query: ""
  };

  handleSearch = () => {
    this.setState({
      query: this.search.value
    });
  };

  filter = movies => {
    return movies.filter(movie => {
      const regex = new RegExp(this.state.query, "gi");
      return movie.title.match(regex);
    });
  };

  render() {
    const { pages } = this.props;
    const { query } = this.state;
    const movies = this.filter(pages.flat());
    return (
      <SearchContainer>
        <SearchForm onSubmit={e => e.preventDefault()}>
          <input
            ref={input => (this.search = input)}
            type="text"
            placeholder="Search for a movie"
            onChange={this.handleSearch}
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
  pages: state.MoviesReducer.pages
});

export default connect(mapStateToProps)(Search);

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
