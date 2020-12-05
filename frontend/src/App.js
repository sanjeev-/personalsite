import React from "react";
import Flex from "./styles/styles.js";
import Intro from "./components/Intro/IntroMain";
import Header from "./components/Header";

import { colors } from "./designSystem/theme";
import "./App.css";

class MainApp extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <body>
          <Flex backgroundColor={colors.grey[2]} minHeight="100vh" width="100%">
            <Flex
              flexDirection={"column"}
              width="100%"
              justifyContent="space-around"
              pt={["50px"]}
            >
              <Header />
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
