import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red'/>;

class TestMapComponent extends Component {

  static defaultProps = {
    zoom: 11
  };

  render() {

    const {placeLatLng} = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAscOyUXQGhsTKBOgl_SYyOCb042zIeTDg' }}
          defaultCenter= {placeLatLng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={placeLatLng.lat}
            lng={placeLatLng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default TestMapComponent;
