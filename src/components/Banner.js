import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.styleObj = props.category.background
      ? {
          backgroundImage: props.category.background,
          backgroundSize: "cover",
        }
      : {
          backgroundColor: props.category.backgroundColor,
          backgroundSize: "cover",
        };
  }

  render() {
    return (
      <Jumbotron
        className="mb-0 p-0 rounded-0 text-white"
        style={this.styleObj}
      >
        <Container className="">
          <Row>
            <Col xs={12} md={6} className="py-3">
              {!!this.props.category.badge && (
                <Row>
                  <Col xs={12} className="text-left pt-4 pb-1">
                    <h6>
                      <Badge variant="light">{this.props.category.badge}</Badge>
                    </h6>
                  </Col>
                </Row>
              )}
              <Row>
                <Col xs={12} className="text-left">
                  <h2>{this.props.category.title}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-left">
                  <p>{this.props.category.description}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-left">
                  <span className=" border border-bottom-0 border-left-0 border-right-0">
                    {this.props.category.attribution}
                  </span>
                </Col>
              </Row>
              {!!this.props.category.button && (
                <Row>
                  <Col xs={12} className="text-left">
                    <h6>
                      <Button variant="light" className="text-primary">
                        {this.props.category.button}
                      </Button>
                    </h6>
                  </Col>
                </Row>
              )}
            </Col>
            <Col
              xs={12}
              md={6}
              className="mx-0"
              style={{
                backgroundImage: this.props.category.foreground,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
