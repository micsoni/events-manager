import React, { Component } from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import EventsListContainer from "./components/EventsListContainer";
import CreateEventFormContainer from "./components/CreateEventFormContainer"
import EventDetailsContainer from "./components/EventDetailsContainer"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/events/:id" component={EventDetailsContainer} />
          <Route exact path="/" component={EventsListContainer} />
          <Route exact path="/events" component={EventsListContainer} />
          <Route exact path="/" component={CreateEventFormContainer}/>
        </div>
      </Provider>
    );
  }
}
export default App;
