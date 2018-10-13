import React, { Component } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";
import Overdrive from "react-overdrive";
import PropTypes from "prop-types";
import { formatBudget, formatRuntime } from "../helpers";
const API_KEY = process.env.API_KEY;

class MovieDetail extends Component {
  state = {
    movie: {},
    genre: [],
    review: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const reviewRes = await fetch(
        `http://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
      );
      const movie = await movieRes.json();
      const review = await reviewRes.json();

      this.setState({
        movie,
        genre: movie.genres,
        review: review.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const POSTER_PATH = "http://image.tmdb.org/t/p/w185";
    const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

    const { movie, genre, review } = this.state;
    return (
      <DetailWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <DetailInfo>
          <Overdrive id={String(movie.id)}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="poster" />
          </Overdrive>
          <div id="info">
            <h1>{movie.title}</h1>
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
              {genre.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </GenreList>
            <p>{movie.overview}</p>
          </div>
        </DetailInfo>
        {review.length && (
          <ReviewSection>
            <h1>Reviews</h1>
            {review.map(rev => (
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
//isRequired affected by initial emptiness of props
MovieDetail.propTypes = {
  movie: PropTypes.object,
  genre: PropTypes.arrayOf(PropTypes.object)
};

export default MovieDetail;

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
