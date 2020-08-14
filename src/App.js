import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import SelectLogin from './components/SelectLogin';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login/:user_type" component={Login} />
          <Route path="/" component={SelectLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
