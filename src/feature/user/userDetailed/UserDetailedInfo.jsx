import React, { Fragment } from 'react'
import {Grid, Header, List, Icon, Item } from 'semantic-ui-react';
import { format } from 'date-fns';

const UserDetailedInfo = ({profile}) => {
    return (
        <Fragment>
            <Grid columns={2}>
                <Grid.Column width={10}>
                    <Header icon='smile' content='About Display Name'/>
                    <p>I am a: <strong>{profile.occupation || 'Unknown'}</strong></p>
                    <p>Originally from <strong>{profile.origin || 'Unknown'}</strong></p>
                    <p>Member Since: <strong>{(profile.createdAt && format(profile.createdAt.toDate(), 'do LLL yyyy')) || '28th March 2018'}</strong></p>
                    <p>Description of user</p>
                    <p><strong>{profile.about || 'Empty'}</strong></p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header icon='heart outline' content='Interests'/>
                    <List>
                    {
                    profile.interests &&  profile.interests.length > 0 
                    ? 
                    
                    profile.interests.map(interest => 
                        <Item>
                            <Icon name='heart'/>
                            <Item.Content>{interest}</Item.Content>
                        </Item>
                    ) 
                    
                    : 
                    <Item>
                        <Icon name='heart'/>
                        <Item.Content>None</Item.Content>
                    </Item>
                    }
                    </List>
                </Grid.Column>
            </Grid>
        </Fragment>
    )
}

export default UserDetailedInfo;
