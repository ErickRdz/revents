import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'


class EventList extends Component {
    render() {

        const {events, selectEvent} = this.props;

        return (
            <Fragment>

                {events && events.map(event => (
                    <EventListItem key={event.id} event={event} selectEvent={selectEvent} />
                ))}
            </Fragment>
        )
    }
}

export default EventList;