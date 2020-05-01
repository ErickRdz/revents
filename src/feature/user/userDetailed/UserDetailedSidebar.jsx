import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = ({isCurrentUser}) => {
    return (

        <Fragment>
        {
            isCurrentUser 
            ? <Button as={Link} to='/settings' color='teal' fluid basic content='Edit Profile'/>
            : <Button color='teal' fluid basic content='Follow user'/>
        }
        </Fragment>
        
    )
}

export default UserDetailedSidebar;
