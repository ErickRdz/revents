import React, { Component } from 'react'
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {createEvent, updateEvent} from '../eventActions';
import cuid from 'cuid';
import textInput from '../../../app/common/form/textInput';
import textArea from '../../../app/common/form/textArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => {

  const eventId = ownProps.match.params.id;

  let event = {};

  if(eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
}

const actions = {
  createEvent,
  updateEvent
};

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators( 
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {

    state = {...this.props.event};

    /*componentDidMount(){
        if(this.props.selectedEvent !== null){
            this.setState({
                ...this.props.selectedEvent
            });
        }
    }*/

    onFormSubmit = (values) => {

        if(this.props.initialValues.id){
          this.props.updateEvent(values);
          this.props.history.push(`/events/${this.props.initialValues.id}`);
        }
        else{
          const newEvent = {
            ...values,
            id: cuid(),
            hostPhotoURL: '/assets/user.png',
            hostedBy: 'Bob'
          }
          this.props.createEvent(newEvent);
          this.props.history.push(`/events/${newEvent.id}`);
        }
    }
    

    /*handleInputChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }*/

    /*handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }*/

    render() {

        // const {cancelFormOpen} = this.props; 
        //const {title, date, city, venue, hostedBy} = this.state;
        const {history, initialValues, invalid, submitting, pristine} = this.props;

        return (

          <Grid>
            <Grid.Column width={10}>
            <Segment>
                    <Form onSubmit={this.props.handleSubmit(this.onFormSubmit) /*this.handleFormSubmit*/}>
                      <Header sub color='teal' content='Event details' />
                      <Field name='title' component={textInput} placeholder='Give your event a name' />
                       <Field name='category' component={SelectInput} options={category} placeholder='What is your event about?' />
                      <Field name='description' component={textArea} rows={3} placeholder='Tell us about your event' />

                      <Header sub color='teal' content='Event location details' />
                      <Field name='city' component={textInput} placeholder='Event city' />
                      <Field name='venue' component={textInput} placeholder='Event venue' />
                      <Field 
                        name='date' 
                        component={DateInput} 
                        dateFormat='dd LLL yyyy h:mm a' 
                        showTimeSelect
                        timeFormat='HH:mm'
                        placeholder='Event Date' 
                      />
                      
                      <Button disabled={invalid || submitting || pristine} positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={
                        initialValues.id 
                        ? () => history.push(`/events/${initialValues.id}`) 
                        : () => history.push(`/events`)
                      } type="button">Cancel</Button>
                    </Form>
                  </Segment>
            </Grid.Column>
          </Grid>
                  
        )
    }
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm', validate})(EventForm));