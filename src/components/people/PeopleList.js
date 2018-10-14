import React, { Component } from "react";
import Person from "./Person";
import styled from "styled-components";

const API_KEY = process.env.API_KEY;

class PeopleList extends Component {
  state = {
    people: []
  };

  async componentDidMount() {
    const peopleRes = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const people = await peopleRes.json();

    this.setState({
      people: people.results
    });
  }
  render() {
    return (
      <PeopleGrid>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            name={person.name}
            movies={person.known_for}
            image={person.profile_path}
          />
        ))}
      </PeopleGrid>
    );
  }
}

export default PeopleList;

const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  padding: 2em;
  margin: 0 auto;
  overflow-x: scroll;
`;
