import React,{Component} from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Components/HomePage';
import CityDetails from './Components/CityDetails';

class App extends Component{
 render(){
return (
  <div className="container">
    <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/HomePage/" component={HomePage} />
        <Route path="/CityDetails/" component={CityDetails} />
    </Router>
  </div>
  );

}}
export default App;
