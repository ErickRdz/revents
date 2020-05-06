import React from 'react'
import {Header, Card, Image, Tab, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const panes = [
    {menuItem: 'All Events', pane: {key: 'allEvents'}},
    {menuItem: 'Past Events', pane: {key: 'pastEvents'}},
    {menuItem: 'Future Events', pane: {key: 'futureEvents'}},
    {menuItem: 'Hosting', pane: {key: 'hosted'}}
]

const UserDetailedEvents = ({events, eventsLoading, changeTab}) => {
    return (

        <Segment loading={eventsLoading}>
            <Header icon='calendar' content='Events'/>
            <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary: true, pointing: true}} />
            <br />
            <Card.Group itemsPerRow={5}>
                {events && events.map(event => (
                    <Card as={Link} to={`/event/${event.id}`} key={event.id}>
                        <Image src={`/assets/categoryImages/${event.category}.jpg`}/>
                        <Card.Content>
                            <Card.Header textAlign='center'>
                                {event.title}
                            </Card.Header>
                            <Card.Meta textAlign='center'>
                                <div>{format(event.date && event.date.toDate(), 'dd LLL yyyy')}</div>
                                <div>{format(event.date && event.date.toDate(), 'h:mm a')}</div>
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </Segment>
    )
}

export default UserDetailedEvents;
