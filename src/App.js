
import React from "react";

import { Container, Row, Col } from 'reactstrap';
import AppMenu from "./components/AppMenu";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Container fluid={true}>
        <BrowserRouter>
          <Row>
            <Col>
              <header>
                <AppMenu />
              </header>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Switch>
                <Route path="/" exact />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;