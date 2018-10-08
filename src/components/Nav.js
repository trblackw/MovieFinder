import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/">
          <img
            src={require("../img/mdb-logo.png")}
            height="100%"
            width="100%"
            alt="mdb logo"
          />
        </NavLink>
      </div>
      <NavUl>
        <li>
          <NavLink to="/search" activeStyle={{ color: "hsl(196, 82%, 60%)" }}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending" activeStyle={{ color: "hsl(196, 82%, 60%)" }}>
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink to="/genres" activeStyle={{ color: "hsl(196, 82%, 60%)" }}>
            Genres
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" activeStyle={{ color: "hsl(196, 82%, 60%)" }}>
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
    float: left;
    width: 150px;
    height: auto;
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
