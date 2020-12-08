import React, { Component } from "react";

export default class Square extends Component {
  render(props) {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
