import React from "react";
import DrawAreaConnector from "./components/DrawAreaConnector";
import Flex from "./styles/styles.js";
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
            height="100%"
            width="100%"
            padding={["40px"]}
            margin="5px"
          >
            <Flex flexDirection="row" justifyContent="center" px={5}>
              <Flex px={5}>
                <DrawAreaConnector />
              </Flex>
              <Flex px={5}>
                <Intro />
              </Flex>
            </Flex>
          </Flex>
        </body>
      </div>
    );
  }
}

export default MainApp;
