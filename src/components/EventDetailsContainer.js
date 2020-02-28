import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent, deleteEvent } from "../store/actions/events";
import EventForm from "./EventForm"
class EventDetailsContainer extends React.Component {
 
  state = { editMode: false };
 
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  handleDelete = event => {
    console.log("clicked");
    event.preventDefault();
    this.props.deleteEvent(Number(this.props.match.params.id));
    this.props.history.push("/");
  };

  handleUpdate = (event) => {
    event.preventDefault();
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.eventDetails.name,
        date: this.props.eventDetails.date,
        description: this.props.eventDetails.description
      }
    });
  };

  onChange = (event) => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.eventDetails.id, this.state.formValues)
  }

  render() {
    if (this.state.editMode) {
      return (
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state.formValues}
        />
      );
    }
    return (
      <EventDetails
        event={this.props.eventDetails}
        onDelete={this.handleDelete}
        onUpdate={this.handleUpdate}
        editMode={this.state.editMode}
      />
    );
  }
}

const mapStateToProps = state => ({
  eventDetails: state.event.details
});
export default connect(mapStateToProps, {
  loadEvent,
  deleteEvent,
  updateEvent
})(EventDetailsContainer);
