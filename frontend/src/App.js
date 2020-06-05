import React from "react";
import DrawArea from "./components/DrawArea";
import Flex from "./components/styledBaseComponents/Flex";
import Intro from "./components/Intro/IntroMain";
import "./App.css";

class MainApp extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <body>
          <Flex
            justifyContent="center"
            alignItems="center"
            padding={["40px"]}
            margin="5px"
          >
            <DrawArea />
            <Intro />
          </Flex>
        </body>
      </div>
    );
  }
}

export default MainApp;
