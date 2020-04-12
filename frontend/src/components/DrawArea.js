import React from "react";
import Drawing from "./Drawing";

var Immutable = require("immutable");

class DrawArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
      lines: Immutable.List(),
    };
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  };

  handleMouseDown = (mouseEvent) => {
    if (mouseEvent.button !== 0) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState((prevState) => {
      return {
        lines: prevState.lines.push(Immutable.List([point])),
        isDrawing: true,
      };
    });
  };

  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  }

  handleMouseMove = (mouseEvent) => {
    if (!this.state.isDrawing) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState((prevState) => {
      return {
        lines: prevState.lines.updateIn([prevState.lines.size - 1], (line) =>
          line.push(point)
        ),
      };
    });
  };

  render() {
    return (
      <div
        className="drawArea"
        ref="drawArea"
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        <Drawing lines={this.state.lines} />
      </div>
    );
  }
}

export default DrawArea;
