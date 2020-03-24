import React, {Component, Fragment} from 'react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import NavBar from '../../feature/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
              <Switch key={this.props.location.key}>
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path={["/createEvent","/manage/:id"]} component={EventForm} />
              <Route path="/test" component={TestComponent} />
              </Switch>
              
            </Container> 
          </Fragment>
        )} 
        />
      </Fragment>
      
    );
  }
}

export default  withRouter(App);
