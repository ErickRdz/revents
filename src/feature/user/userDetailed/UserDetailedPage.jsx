import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect, isEmpty} from 'react-redux-firebase';
import {Grid, Segment} from "semantic-ui-react";
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedInfo from './UserDetailedInfo';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedSidebar from './UserDetailedSidebar';
import {userDetailedQuery} from '../userQueries';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import {getUserEvents} from '../userActions';

const mapState = (state, ownProps) => {

    let userId = null;
    let profile = {};

    if(ownProps.match.params.id === state.auth.uid){
        profile = state.firebase.profile
    }else{
        profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
        userId = ownProps.match.params.id;
    }

    return {
        profile,
        userId,
        events: state.events,
        eventsLoading: state.async.loading,
        auth: state.firebase.auth,
        photos: state.firestore.ordered.photos,
        requesting: state.firestore.status.requesting
    }
    
};

const actions = {
    getUserEvents
}

class UserDetailedPage extends Component {

    async componentDidMount(){
        let events = await this.props.getUserEvents(this.props.userId);
        console.log(events);
    }

    changeTab = (e, data) => {
        this.props.getUserEvents(this.props.userId, data.activeIndex);
    }

    render() {

        const {profile, photos, userId, auth, requesting, events, eventsLoading} = this.props;
        const isCurrentUser = userId === auth.uid;
        const loading = Object.values(requesting).some(a => a === true);
        if (loading) return <LoadingComponent />

        return (
            <Grid>
                <Grid.Column width={16}>
                    <Segment>
                        <UserDetailedHeader profile={profile} />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Segment>
                        <UserDetailedInfo profile={profile}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <UserDetailedSidebar isCurrentUser={isCurrentUser}/>
                    </Segment>
                </Grid.Column>

                <Grid.Column width={12}>
                    <Segment attached>
                        {
                            photos && photos.length &&
                            <UserDetailedPhotos photos={photos}/>
                        }
                    </Segment>
                </Grid.Column>

                <Grid.Column width={12}>
                    <Segment attached>
                        <UserDetailedEvents events={events} eventsLoading={eventsLoading} changeTab={this.changeTab} />
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    }
}

export default compose(
    connect(mapState, actions),
    firestoreConnect((auth, userId) => userDetailedQuery(auth, userId))
 )(UserDetailedPage);