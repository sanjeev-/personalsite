import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ProjectsConnector from "./components/projects/ProjectsConnector";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Import fonts
import "./fonts/Junicode.ttf";
import "./fonts/Junicode-Bold.ttf";
import "./fonts/Junicode-BoldItalic.ttf";
import "./fonts/Junicode-Italic.ttf";
import "./fonts/WorkSans-Thin.ttf";
import "./fonts/WorkSans-Black.ttf";
import "./fonts/WorkSans-Bold.ttf";
import "./fonts/WorkSans-Light.ttf";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={ProjectsConnector} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
