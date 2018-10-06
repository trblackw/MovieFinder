import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { logo } from "../img/mdb-logo.png";
const Nav = () => {
  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/">
          <img
            src={require("../img/mdb-logo.png")}
            height="25%"
            width="25%"
            alt="mdb logo"
          />
        </NavLink>
      </div>
      <NavUl>
        <li>
          <NavLink to="/search" activeStyle={{ color: "red" }}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending" activeStyle={{ color: "red" }}>
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink to="/genres" activeStyle={{ color: "red" }}>
            Genres
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" activeStyle={{ color: "red" }}>
            People
          </NavLink>
        </li>
      </NavUl>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  background: hsl(0, 0%, 13%);
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 1.5em;
  #logo {
    position: relative;
    display: inline-block;
    float: left;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;

  li:first-child {
    float: left;
  }

  li {
    margin-left: 0.8em;
    padding: 0.5em;
  }

  li a {
    color: whitesmoke;
  }
`;
