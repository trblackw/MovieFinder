import React, { Component } from "react";
import Movie from "./Movie";
import { MovieGrid } from "./MovieList";

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
      console.log(this.state.trending);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { trendingMovies, trendingTVShows } = this.state;
    return (
      <div>
        <h3 style={{ color: "whitesmoke" }}>Movies</h3>
        <MovieGrid>
          {trendingMovies.map(movie => (
            <Movie key={movie.id} title={movie.title} movie={movie} />
          ))}
        </MovieGrid>
        <h3 style={{ color: "whitesmoke" }}>TV Shows</h3>
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
