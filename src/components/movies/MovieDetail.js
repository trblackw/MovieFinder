import React, { Component } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";
import Overdrive from "react-overdrive";
import PropTypes from "prop-types";
import { formatBudget, formatRuntime } from "../../helpers";

const API_KEY = process.env.API_KEY;

class MovieDetail extends Component {
  state = {
    movie: {},
    genres: [],
    reviews: []
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const reviewRes = await fetch(
        `http://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
      );
      const movie = await movieRes.json();
      const reviews = await reviewRes.json();
      this.setState({
        movie,
        genres: movie.genres,
        reviews
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const POSTER_PATH = "http://image.tmdb.org/t/p/w185";
    const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
    const LOGO_PATH = "https://image.tmdb.org/t/p/w92/";

    const { movie, genres, reviews } = this.state;
    console.log(movie.production_companies);
    return (
      <DetailWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <DetailInfo>
          <Overdrive id={String(movie.id)}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="poster" />
          </Overdrive>
          <div id="info">
            <h1>{movie.title}</h1>
            {Array.isArray(movie.production_companies) && (
              <Logos>
                {movie.production_companies.map(company => (
                  <div key={company.id}>
                    <img src={`${LOGO_PATH}${company.logo_path}`} alt="" />
                  </div>
                ))}
              </Logos>
            )}
            <div id="infoAttr">
              <p className="first">{movie.release_date}</p>
              <p>
                {movie.vote_average}
                /10
              </p>
              {movie.budget && <p>Budget: ${formatBudget(movie.budget)}</p>}

              {movie.runtime !== null && <p>{formatRuntime(movie.runtime)}</p>}
            </div>

            <GenreList>
              {genres.map(item => (
                <li key={item.id * Math.random()}>{item.name}</li>
              ))}
            </GenreList>
            <p>{movie.overview}</p>
          </div>
        </DetailInfo>
        {reviews.length && (
          <ReviewSection>
            <h1>Reviews</h1>
            {reviews.map(rev => (
              <div key={rev.id}>
                <h4>{rev.author}</h4>
                <p id="review">
                  <em>{`"${rev.content}"`}</em>
                </p>
              </div>
            ))}
          </ReviewSection>
        )}
      </DetailWrapper>
    );
  }
}
MovieDetail.propTypes = {
  movie: PropTypes.object,
  genre: PropTypes.arrayOf(PropTypes.object)
};

export default MovieDetail;

// const mapStateToProps = state => ({
//   details: state.MoviesReducer.details
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ fetchMovieDetails }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MovieDetail);

const DetailWrapper = styled.div`
  position: relative;
  padding-top: 60vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-position: relative;
  object-fit: cover;
  justify-content: center;
`;

const DetailInfo = styled.div`
  background: rgb(245, 245, 245, 0.7);
  text-align: left;
  line-height: 1.9em;
  padding: 2rem 10%;
  display: flex;
  margin-top: 1.9em;
  font-size: 1.2em;
  div#info {
    margin-left: 20px;
  }
  div#infoAttr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    margin: 1em auto 1em 0;
    color: hsl(0, 100%, 59%);
  }
  div#infoAttr > p:not(.first) {
    display: inline-block;
    margin-left: 1.5em;
  }

  div#infoAttr > p:hover {
    color: hsl(0, 100%, 72%);
    cursor: pointer;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

const GenreList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    list-style: none;
    font-style: italic;
    font-size: 0.8em;
    font-weight: 700;
    margin-left: 1em;
    color: dodgerblue;
  }
`;

const ReviewSection = styled.div`
  padding: 2em;
  margin: 0 auto;
  background: black;
  color: whitesmoke;
  div {
    margin-bottom: 1.5em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid hsl(0, 100%, 59%);
    line-height: 1.6em;
  }
  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 1em;
  }
  h4 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  #review {
    text-indent: 0.7em;
    font-family: "Open sans", sans-serif;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  float: right;
  margin: 1.5em;

  div {
    margin-left: 0.6em;
  }
`;
