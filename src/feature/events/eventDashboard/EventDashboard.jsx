import React, { Component, createRef } from 'react';
import {connect} from 'react-redux';
import { Grid, Loader } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import {getEventsForDashboard} from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../eventActivity/EventActivity';
import {firestoreConnect} from 'react-redux-firebase';

const query = [
    {
        collection: 'activity',
        orderBy: ['timestamp', 'desc'],
        limit: 5
    }
]

const mapState = (state) => ({
  events: state.events.events,
  loading: state.async.loading,
  activities: state.firestore.ordered.activity
});

const actions = {
    getEventsForDashboard
}

class EventDashboard extends Component {

    contextRef = createRef();

    state = {
        moreEvents: false,
        loadingInitial: true,
        loadedEvents: []
    }

    async componentDidMount(){
        let next = await this.props.getEventsForDashboard();

        if(next && next.docs && next.docs.length > 1){
            this.setState({
                moreEvents: true,
                loadingInitial: false
            })
        }
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.events !== prevProps.events){
            this.setState({
                loadedEvents: [...this.state.loadedEvents, ...this.props.events]
            })
        }
    }

    getNextEvents = async () => {
        const {events} = this.props;
        let lastEvent = events && events[events.length - 1];
        
        let next = await this.props.getEventsForDashboard(lastEvent);

        if(next && next.docs && next.docs.length <= 1){
            this.setState({
                moreEvents: false
            })
        }
    }

    render() {
        
        const {loading, activities} = this.props;
        const {moreEvents, loadedEvents} = this.state;
        if(this.state.loadingInitial) return <LoadingComponent />

        return (
            <Grid>
                <Grid.Column width={10}>
                    <div ref={this.contextRef}>
                        <EventList 
                            events={loadedEvents} 
                            getNextEvents={this.getNextEvents} 
                            loading={loading}
                            moreEvents={moreEvents}
                        />
                    </div>
                    
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventActivity activities={activities} contextRef={this.contextRef} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Loader active={loading} />
                </Grid.Column>
            </Grid>        
        )
    }
}

export default connect(mapState, actions) (firestoreConnect(query)(EventDashboard));