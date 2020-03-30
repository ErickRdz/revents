import React, { Component } from 'react'
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import TestMapComponent from './TestMapComponent';

import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import cuid from 'cuid';

const mapState = (state) => ({
    data: state.test.data
});

const actions = {
    incrementCounter, 
    decrementCounter
}

class TestComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            placeLatLng: {
                lat: 59.95,
                lng: 30.33
            },
            mapId: cuid()
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(address){
       geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
            placeLatLng: latLng,
            mapId: cuid()
        })
      });
    }

    render() {
        const {data, incrementCounter, decrementCounter} = this.props;

        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'  />
                <Button onClick={decrementCounter} negative content='Decrement'  />
                <br/><br />
                <TestPlaceInput handleSelect={this.handleSelect} />
                <TestMapComponent key={this.state.mapId} placeLatLng={this.state.placeLatLng} />

            </div>
        )
    }
}

export default connect(mapState, actions)(TestComponent);