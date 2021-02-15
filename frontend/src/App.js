import React from "react";
import { Flex } from "coppola";
import Header from "./components/Header";
import "./App.css";

class MainApp extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <body>
          <Flex primary minHeight="100vh" width="100%">
            <Flex flexDirection="column" width="100%" px={5} py={4}>
              <Header />
              <Flex></Flex>
            </Flex>
          </Flex>
        </body>
      </div>
    );
  }
}

export default MainApp;
