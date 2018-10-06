import React, { Component } from "react";
import Movie from "./Movie";
import { MovieGrid } from "./MovieList";

class TrendingSelection extends Component {
  state = {
    trending: []
  };

  async componentDidMount() {
    try {
      const trendingRes = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=ba1ed06e4a2885f1ceb3219f8f940de6"
      );
      const trending = await trendingRes.json();

      this.setState({
        trending: trending.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { trending } = this.state;
    return (
      <div>
        <MovieGrid>
          {trending.map(movie => (
            <Movie key={movie.id} title={movie.title} movie={movie} />
          ))}
        </MovieGrid>
      </div>
    );
  }
}

export default TrendingSelection;
