import React, { Component } from "react";
import "./heading.scss";
export default class Heading extends Component {
  render() {
    return <div className="heading">{this.props.children}</div>;
  }
}
