import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { HOME } from './constants/navigations';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={HOME} exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
