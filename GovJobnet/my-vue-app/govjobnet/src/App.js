import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SignUp from '../../src/components/SignUp';
import GeolocationSearch from '../../src/components/GeolocationSearch';
import JobSearch from '../../src/components/JobSearch';
import AdminPanel from '../../src/components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/geolocation-search" component={GeolocationSearch} />
          <Route path="/job-search" component={JobSearch} />
          <Route path="/admin" component={AdminPanel} />
          <Route component={GovJobnet/my-vue-app/src/components}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
