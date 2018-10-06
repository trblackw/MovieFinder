import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
// import { ReactDOM } from 'react-dom';
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Nav from "./components/Nav";
import GenreSelection from "./components/GenreSelection";
import TrendingSelection from "./components/TrendingSelection";
import Search from "./components/Search";
import PeopleList from "./components/PeopleList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/genres" component={GenreSelection} />
            <Route path="/people" component={PeopleList} />
            <Route path="/trending" component={TrendingSelection} />
            <Route path="/search" component={Search} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));
