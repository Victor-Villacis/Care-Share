import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import News from "./pages/News";
import SignIn from "./pages/SignIn";
import Sponsor from "./pages/Sponsor";
import Team from "./pages/Team";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/news" component={News} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

