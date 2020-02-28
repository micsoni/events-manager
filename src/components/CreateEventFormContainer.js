import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../store/actions/events'
import EventForm from './EventForm'
import "./CreateEventFormContainer.css"

class CreateEventFormContainer extends React.Component {
  state = {
    name: '',
    date: '',
    description: ''
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState({
      name: '',
      date: '',
      description: ''
    })
  }
  render() {
    return (<EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}
export default connect(null, {createEvent})(CreateEventFormContainer)