import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboards from './pages/Leaderboards';
import ProfilePage from './pages/Profile';
import Tournaments from './pages/Tournaments';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/leaderboards" component={Leaderboards} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/tournaments" component={Tournaments} />
      </Switch>
    </Router>
  );
};

export default App;