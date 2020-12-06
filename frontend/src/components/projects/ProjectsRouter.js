import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Flex } from "../../designSystem";
import ProjectsConnector from "./ProjectsConnector";
import ZoraProject from "./UntitledZoraProject/ZoraProject";

const ProjectsRouter = () => {
  return (
    <Flex>
      <Switch>
        <Route exact path="/projects" component={ProjectsConnector} />
        <Route exact path="/projects/zora" component={ZoraProject} />
      </Switch>
    </Flex>
  );
};

export default ProjectsRouter;
