import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Global/Header';
import Feedback from './Feedback/Feedback';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard';
import EventAction from './Event/EventAction';
import EventList from './Event/EventList';
import Event from './Event/Event';
import Roles from './User/Roles';
import Report from './Report/ReportList';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import ReportList from './Report/ReportList';
import Login from './Login/Login';
import EventDetails from './Event/EventDetails';
import FeedbackList from './Feedback/FeedbackList';
import Loading from './Utils/Loading';

axios.defaults.baseURL = "http://localhost:8662";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container-fluid">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/event/list" component={Event} />
          <Route path="/event/report" component={Report} />
          <Route path="/feedback/roles" component={Roles} />
          <Route path="/feedback/index" component={Feedback} />
          <Route path="/event/index" component={EventDetails} />
          <Route path="/feedback/list" component={FeedbackList} />
          <Route path="/loading" component={Loading} />
        </div>
      </Router>
    </div>
  );
}

export default App;
