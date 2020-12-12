import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Flex } from "../../designSystem";
import ProjectsDashboard from "./ProjectsDashboard";
import ZoraProject from "./UntitledZoraProject/ZoraProject";

const ProjectsRouter = () => {
  return (
    <Flex>
      <Switch>
        <Route exact path="/projects" component={ProjectsDashboard} />
        <Route exact path="/about" component={ProjectsDashboard} />
        <Route exact path="/projects/zora" component={ZoraProject} />
      </Switch>
    </Flex>
  );
};

export default ProjectsRouter;
