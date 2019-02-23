import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import faker from "faker";

class About extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="15" sm="15" md="20">
            <Card>
              <CardHeader style={{ textAlign: "center" }}>About</CardHeader>
              <CardBody>
                {faker.lorem.paragraph()}
                {faker.lorem.paragraph()}
                {faker.lorem.sentences()}
                {faker.lorem.paragraph()}
                {faker.lorem.paragraph()}
                {faker.lorem.sentences()}
                {faker.lorem.paragraph()}
                {faker.lorem.paragraph()}
                {faker.lorem.sentences()}
                {faker.lorem.paragraph()}
                {faker.lorem.paragraph()}
                {faker.lorem.sentences()}
                {faker.lorem.paragraph()}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
