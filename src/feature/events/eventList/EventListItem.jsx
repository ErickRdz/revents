import React, { Component } from 'react'
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import {format, parseISO} from 'date-fns';

class EventListItem extends Component {
    render() {

        const {event, deleteEvent} = this.props;
        const {attendees} = event;

        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header as="a">{event.title}</Item.Header>
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {format( parseISO(event.date), 'EEEE do LLL')} at {' '} 
                        {format( parseISO(event.date), 'h:mm a') }|
                        <Icon name="marker" /> {event.time}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                        { attendees && 
                            attendees.map(attendee => (
                                <EventListAttendee key={attendee.id} attendee ={attendee} />
                            ))
                        }
                      </List>
                    </Segment>
                    <Segment clearing>
                        <span>{event.description}</span>
                        <Button onClick={() => deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                        <Button  as={Link} to={`/events/${event.id}`} color="teal" floated="right" content="View" />
                        {// <Button onClick={(evt) => selectEvent(evt,event)} as="a" color="teal" floated="right" content="View" />
                         }
                    </Segment>
                  </Segment.Group>
        )
    }
}

export default EventListItem;