import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import MovieList from "./components/movies/MovieList";
import MovieDetail from "./components/movies/MovieDetail";
import Nav from "./components/Nav";
import GenreSelection from "./components/genres/GenreSelection";
import TrendingSelection from "./components/trending/TrendingSelection";
import Search from "./components/search/Search";
import PeopleList from "./components/people/PeopleList";
import { Provider } from "react-redux";
import configureStore from "./store";

const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/genres" component={GenreSelection} />
        <Route path="/people" component={PeopleList} />
        <Route path="/trending" component={TrendingSelection} />
        <Route path="/search" component={Search} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
