import React from "react";
//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUS";
import Activity from "./pages/Activity";
import LoanCalculator from "./pages/LoanCalculator";
import TestDrive from "./pages/TestDrive";
import ContactUS from "./pages/ContactUS";
import GoAuto from "./pages/GoAuto";
import Borgward from "./pages/Borgward";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/activity" component={Activity} />
        <Route path="/contact" component={ContactUS} />
        <Route path="/testdrive" component={TestDrive} />
        <Route path="/loancalculator" component={LoanCalculator} />
        <Route path="/goauto" component={GoAuto} />
        <Route path="/borgward" component={Borgward} />
      </Switch>
    </Router>
  );
}

export default App;
