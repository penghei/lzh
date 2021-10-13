import React from 'react';
import './App.css';
import Mainpage from './Page/Mainpage';
import { HashRouter as Router, Route } from 'react-router-dom';
import Deatailpage from './Page/Detailpage';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Mainpage}></Route>
        <Route path="/detail" component={Deatailpage}></Route>
      </Router>
    </div>
  );
}

export default App;
