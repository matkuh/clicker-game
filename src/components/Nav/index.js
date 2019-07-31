import React from "react";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
      </a>
      <ul>
        <li id="highscore">High Score: {props.highScore}</li>
        <li id="score">Score: {props.score}</li>
      </ul>
    </nav>
  );
}

export default Nav;
