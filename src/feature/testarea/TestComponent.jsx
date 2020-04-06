import React, { Component } from 'react'
import {connect} from 'react-redux';
import {incrementAsync, decrementAsync} from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import TestMapComponent from './TestMapComponent';

import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import cuid from 'cuid';
import {openModal} from '../modals/modalActions';

const mapState = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
});

const actions = {
    incrementAsync, 
    decrementAsync,
    openModal
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
        const {data, incrementAsync, decrementAsync, openModal, loading, buttonName} = this.props;

        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <Button 
                    name='increment' 
                    loading={buttonName === 'increment' && loading} 
                    onClick={(e) => incrementAsync(e.target.name)} 
                    positive 
                    content='Increment'  
                />
                <Button 
                    name='decrement' 
                    loading={buttonName === 'decrement' && loading} 
                    onClick={(e) => decrementAsync(e.target.name)} 
                    negative 
                    content='Decrement'  
                />
                <Button onClick={() => openModal('TestModal', {data: 42})} color='teal' content='Open modal'  />
                <br/><br />
                <TestPlaceInput handleSelect={this.handleSelect} />
                <TestMapComponent key={this.state.mapId} placeLatLng={this.state.placeLatLng} />

            </div>
        )
    }
}

export default connect(mapState, actions)(TestComponent);