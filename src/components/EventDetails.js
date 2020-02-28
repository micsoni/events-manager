import React, { Component } from "react";



export default class EventDetails extends Component {

  render() {
    console.log(this.props);

    if (!this.props.event) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } 
    return (
      <div>
        <h1> {this.props.event.name}</h1>
        <i>{this.props.event.date}</i>
        <p>{this.props.event.description}</p>
        <div className="row">
        <div className="col-sm-2">
        <button onClick={this.props.onDelete} className="btn btn-dark">Delete</button>
      </div>
      <div className="col-sm-2"></div>
        <button onClick={this.props.onUpdate} className="btn btn-dark">Edit</button> 
     </div>
      </div>

    );
  }
}

