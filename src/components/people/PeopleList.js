import React, { Component } from "react";
import Person from "./Person";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPeople } from "./people_actions";

class PeopleList extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props;
    fetchPeople();
  }
  render() {
    const { people } = this.props;
    return (
      <PeopleGrid>
        {people.map(person => (
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

const PeopleGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
  overflow-x: scroll;
`;

const mapStateToProps = state => ({
  people: state.PeopleReducer.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPeople }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);
