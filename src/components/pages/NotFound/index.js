import React, { Component } from "react";
import { Col, Container, InputGroup, InputGroupAddon, Row } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div className="Container" style={{ height: "1000px" }}>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <div className="clearfix">
                  <h1 className="float-left display-3 mr-4">404</h1>
                  <h4 className="pt-4">Oops! You're lost.</h4>
                  <p className="text-muted float-left">
                    The page you are looking for was not found.
                  </p>
                </div>
                <InputGroup className="input-prepend">
                  <InputGroupAddon addonType="prepend" />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default NotFound;
