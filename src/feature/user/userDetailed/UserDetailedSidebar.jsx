import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = () => {
    return (
        <Fragment>
            <Button as={Link} to='/settings' color='teal' fluid basic content='Edit Profile'/>
        </Fragment>
    )
}

export default UserDetailedSidebar;
