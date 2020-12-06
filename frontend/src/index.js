import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ProjectsRouter from "./components/projects/ProjectsRouter";
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
import gql from "graphql-tag";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.hellosanjeev.com/graphql",
});

const GET_ZORA_SNIPPETS = gql`
  query {
    retrieveZoraSnippets {
      date
      title
      path
    }
  }
`;

const client = new ApolloClient({ cache, link });

client
  .query({
    query: GET_ZORA_SNIPPETS,
  })
  .then((result) => console.log(result));

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={ProjectsRouter} />
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
