import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SimpleTable from './components/table';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <SimpleTable></SimpleTable>
        </div>
      </Router>
    );
  }
}

export default App;