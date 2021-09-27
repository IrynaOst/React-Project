import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
}

export default App;
