import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const API_KEY = process.env.API_KEY;

class GenreSelection extends PureComponent {
  state = {
     genres: [],
     search: []
  };

  async componentDidMount() {
    try {
      const genreRes = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
       const genresList = await genreRes.json();

      this.setState({
        genres: genresList.genres
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { genres } = this.state;

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

const GenreContainer = styled.div`
   background: hsl(0, 0%, 10%);
   margin: 0 auto;
   text-align: center;
   padding: 1.5em;
   font-size: 1.8em;
   color: hsl(196, 82%, 60%);
      h2 {
         font-size: 2.5em;
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

export default GenreSelection;
