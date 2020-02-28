import React from "react";
import { loadEvents } from "../store/actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    if (!this.props.eventsInState.length) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    const displayEvents = this.props.eventsInState.map(event => {
      return <EventsList key={event.id} events={event.name} id={event.id} />;
    });

    return (
    <div> <p>Total results: {this.props.totalEvents}</p>
    <div className="list-group col-md-6">

    <ul>{displayEvents}</ul>
    </div>
    </div>)
  }
}
const mapStateToProps = state => ({
  eventsInState: state.events.all,
  totalEvents: state.events.total
});
export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
