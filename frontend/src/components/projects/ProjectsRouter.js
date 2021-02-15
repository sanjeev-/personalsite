import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flex } from "coppola";
import ProjectsDashboard from "./ProjectsDashboard";
import ZoraProject from "./UntitledZoraProject/ZoraProject";

const ProjectsRouter = () => {
  return (
    <Flex primary>
      <Switch>
        <Route exact path="/projects" component={ProjectsDashboard} />
        <Route exact path="/about" component={ProjectsDashboard} />
        <Route exact path="/projects/zora" component={ZoraProject} />
      </Switch>
    </Flex>
  );
};

export default ProjectsRouter;
