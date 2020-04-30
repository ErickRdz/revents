import React, { Fragment } from 'react'
import {differenceInCalendarYears} from 'date-fns';
import {Item, Header} from 'semantic-ui-react';

const UserDetailedHeader = ({profile}) => {
    return (
        <Fragment>
            <Item.Group>
                <Item>
                    <Item.Image avatar size='small' src={profile.photoURL || '/assets/user.png'}/>
                    <Item.Content verticalAlign='bottom'>
                        <Header as='h1'>{profile.displayName}</Header>
                        <br/>
                        <Header as='h3'>{profile.occupation || 'Unknown'}</Header>
                        <br/>
                        <Header as='h3'>
                            <Fragment> 
                            {
                                (
                                    typeof profile.dateOfBirth !== 'undefined' 
                                    ? differenceInCalendarYears(new Date(), profile.dateOfBirth.toDate()) + ', '
                                    : 'Unknown age, '
                                )
                                + 'lives in ' + (profile.city || 'Unknown')
                            }
                            </Fragment>
                            
                        </Header>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Fragment>
    )
}

export default UserDetailedHeader;
