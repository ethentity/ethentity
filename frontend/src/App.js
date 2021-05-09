import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Verification from "./pages/Verification";
import Profile from "./pages/Profile";
import Identities from "./pages/Identities";
import Error from "./pages/Error";
import logo from "./assets/ethentity-logo.png";
import { Tooltip } from "shards-react";

import "shards-ui/dist/css/shards.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">
            <img id="logo" src={logo} alt="" width="60" height="60" />
            <Tooltip open={this.state.open} target="#logo" toggle={this.toggle}>
              <span role="img" aria-label="lol">
                😁
              </span>{" "}
              Go Home!
            </Tooltip>
          </Link>
        </div>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/verification" component={Verification} />
            <Route path="/profile" component={Profile} />
            <Route path="/identities" component={Identities} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
