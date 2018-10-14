import React, { Component } from "react";
import Movie from "../movies/Movie";
import { MovieGrid } from "../movies/MovieList";

class TrendingSelection extends Component {
  state = {
    //  trending: [],
    trendingMovies: [],
    trendingTVShows: []
  };

  async componentDidMount() {
    try {
      const trendingRes = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=ba1ed06e4a2885f1ceb3219f8f940de6"
      );
      const trending = await trendingRes.json();
      const trendingMovies = trending.results.filter(
        item => !item.original_name
      );
      const trendingTVShows = trending.results.filter(
        item => item.original_name
      );

      this.setState({
        //   trending: trending.results
        trendingMovies,
        trendingTVShows
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { trendingMovies, trendingTVShows } = this.state;
    return (
      <div>
        <h2 style={{ color: "whitesmoke", margin: '0 1em'}}>Movies</h2>
        <MovieGrid>
          {trendingMovies.map(movie => (
            <Movie key={movie.id} title={movie.title} movie={movie} />
          ))}
        </MovieGrid>
        <h2 style={{ color: "whitesmoke", margin: '0 1em' }}>TV Shows</h2>
        <MovieGrid>
          {trendingTVShows.map(show => (
            <Movie key={show.id} title={show.name} show={show} />
          ))}
        </MovieGrid>
      </div>
    );
  }
}

export default TrendingSelection;
