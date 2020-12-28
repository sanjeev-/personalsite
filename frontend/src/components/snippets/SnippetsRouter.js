import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Flex } from "../../designSystem";
import SnippetsConnector from "./SnippetsConnector";
import SnippetDetailView from "./SnippetDetailView";

const SnippetsRouter = () => {
  return (
    <Flex>
      <Switch>
        <Route exact path="/snippets" component={SnippetsConnector} />
        <Route exact path="/snippets/:id" component={SnippetDetailView} />
      </Switch>
    </Flex>
  );
};

export default SnippetsRouter;
