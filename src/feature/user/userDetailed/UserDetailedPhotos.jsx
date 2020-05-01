import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

const UserDetailedPhotos = ({photos}) => {
    return (
        <Fragment>
            <Header icon='image' content='Photos'/>
            <Image.Group size='small'>
                {photos && photos.map(photo => 
                    <LazyLoad key={photo.id} height={150} placeholder={<Image src='/assets/user.png' />}>
                        <Image  src={photo.url} />
                    </LazyLoad>
                )}
                
            </Image.Group>
        </Fragment>
    )
}

export default UserDetailedPhotos;
