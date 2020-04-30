import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react';

const UserDetailedPhotos = ({photos}) => {
    return (
        <Fragment>
            <Header icon='image' content='Photos'/>
            <Image.Group size='small'>
                {
                    
                    photos.map(photo => 
                        <Image key={photo.name} src={photo.url}/>
                    )

                }
                
            </Image.Group>
        </Fragment>
    )
}

export default UserDetailedPhotos;
