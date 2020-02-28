import React, { Component } from 'react'

export default class EventForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
         <div className="form-row">
    <div className="form-group col-md-6">
      
      <label className="col-sm-2">
            Name </label>
            <input
              type="text" className="form-control"
              name="name"
              onChange={this.props.onChange}
              value={this.props.values.name}
            />
         
          </div>
          <div className="form-group col-md-6">
        <label className="col-sm-2">
            Date </label>
            <input
              type="text" className="form-control"
              name="date"
              onChange={this.props.onChange}
              value={this.props.values.date}
            />
         
          </div>
          <div className="form-group col-md-12"> 
          <label className="col-sm-2">
            Description   </label>
            <input
              type="textarea" className="form-control"
              name="description"
              onChange={this.props.onChange}
              value={this.props.values.description}
            />
       
        </div></div>
          <button type="submit" className="btn btn-dark" > Save </button>
      </form>
    )
  }
}
