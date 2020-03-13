import React, {Component, Fragment} from 'react';
import EventDashboard from '../../feature/event/eventDashboard/EventDashboard';
import NavBar from '../../feature/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return(
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container> 
        
      </Fragment>
    );
  }
}

export default App;
