import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Risk Finder Data Services" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
