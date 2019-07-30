import React from "react";
import "./style.css";
import { tsPropertySignature } from "@babel/types";

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
