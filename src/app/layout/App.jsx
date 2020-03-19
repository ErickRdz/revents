import React, {Component, Fragment} from 'react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import NavBar from '../../feature/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../feature/home/HomePage';
import EventDetailedPage from '../../feature/events/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../feature/user/peopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../feature/user/userDetailed/UserDetailedPage';
import SettingsDashboard from '../../feature/user/settings/SettingsDashboard';
import EventForm from '../../feature/events/eventForm/EventForm';
import TestComponent from '../../feature/testarea/TestComponent';


class App extends Component {
  render() {
    return(
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path='/(.+)' render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createEvent" component={EventForm} />
              <Route path="/test" component={TestComponent} />
            </Container> 
          </Fragment>
        )} 
        />
      </Fragment>
      
    );
  }
}

export default App;
