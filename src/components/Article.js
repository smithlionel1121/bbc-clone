import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.size = props.large ? { width: "36rem" } : { width: "18rem" };
    this.live = props.live ? (
      <span style={{ color: "#4582ec" }}>
        <Spinner animation="grow" variant="primary" /> LIVE
      </span>
    ) : null;
  }

  onHover = (e) => {
    e.target.style.textDecoration = "underline";
    e.target.style.color = "rgb(69, 130, 236)";
  };
  offHover = (e) => {
    e.target.style.textDecoration = "none";
    e.target.style.color = "black";
  };

  render() {
    return (
      <Card style={this.size} id={this.props.headline}>
        <Card.Link href={`#${this.props.headline}`} className="text-dark">
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body className="">
            <Card.Title>
              {this.live}{" "}
              <span onMouseOver={this.onHover} onMouseOut={this.offHover}>
                {this.props.headline}
              </span>
              {this.props.arrow && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              )}
            </Card.Title>
          </Card.Body>
        </Card.Link>
        <Card.Footer
          className="text-muted text-left border-top-0 mt-auto"
          style={{ backgroundColor: "white" }}
        >
          {this.props.attribution}
        </Card.Footer>
      </Card>
    );
  }
}
