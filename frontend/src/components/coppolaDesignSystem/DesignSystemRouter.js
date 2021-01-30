import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Flex } from "../../designSystem";
import DesignSystemConnector from "./DesignSystemConnector";

const SnippetsRouter = () => {
  return (
    <Flex>
      <Switch>
        <Route exact path="/design-system" component={DesignSystemConnector} />
      </Switch>
    </Flex>
  );
};

export default SnippetsRouter;
