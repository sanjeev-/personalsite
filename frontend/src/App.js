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
            // justifyContent="center"
            // alignItems="center"
            minHeight="100vh"
            width="100%"
          >
            <Flex
              flexDirection={["column", "row", "row"]}
              width="100%"
              justifyContent="space-around"
              pt={["50px"]}
            >
              <Flex>
                <DrawAreaConnector />
              </Flex>
              <Flex>
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
