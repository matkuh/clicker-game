import React from "react";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
      </a>
      <ul>
        <li>High Score: {props.highscore}</li>
        <li>Score: {props.score}</li>
      </ul>
    </nav>
  );
}

export default Nav;
