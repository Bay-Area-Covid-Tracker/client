import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import NavigationBar from '../NavigationBar';
import Main from '../Main';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
