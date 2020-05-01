import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import {createEvent, updateEvent} from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../eventActivity/EventActivity';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

const mapState = (state) => ({
  events: state.firestore.ordered.events
});

const actions = {
  createEvent,
  updateEvent
}

class EventDashboard extends Component {

    render() {
        
        const {events} = this.props;

        if(!isLoaded(events)) return <LoadingComponent />

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventActivity />
                </Grid.Column>
            </Grid>        
        )
    }
}

export default connect(mapState, actions) (firestoreConnect([{collection: 'events'}])(EventDashboard));