import React from "react";
import DrawArea from "./components/DrawArea";
import Drawing from "./components/Drawing";
import "./App.css";

class MainApp extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <body>
          <p>Draw here!</p>
          <DrawArea>
            <Drawing />
          </DrawArea>
        </body>
      </div>
    );
  }
}

export default MainApp;
