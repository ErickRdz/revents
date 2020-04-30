import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Grid, Segment} from "semantic-ui-react";
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedInfo from './UserDetailedInfo';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedSidebar from './UserDetailedSidebar';

const photosQuery = ({auth}) => {
    return [
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{collection: 'photos'}],
            storeAs: 'photos'
        }
    ];
}

const mapState = (state, ownProps) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    photos: state.firestore.ordered.photos
});

class UserDetailedPage extends Component {

    render() {

        const {profile, photos} = this.props;

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
                        <UserDetailedSidebar />
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
                        <UserDetailedEvents />
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    }
}

export default compose(
    connect(mapState),
    firestoreConnect(auth => photosQuery(auth))
)(UserDetailedPage);