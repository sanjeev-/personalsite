import React from "react";
import DrawArea from "./components/DrawArea";
import Title from "./components/styledBaseComponents/Title";
import "./App.css";

class MainApp extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <body>
          <Title>Draw here!</Title>
          <DrawArea />
        </body>
      </div>
    );
  }
}

export default MainApp;
