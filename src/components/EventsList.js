import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  render() {
    return (
      <Link to={`/events/${this.props.id}`}>
        <li className="list-group-item list-group-item-action list-group-item-dark">{this.props.events}</li>
      </Link>
    );
  }
}
