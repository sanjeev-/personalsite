import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
