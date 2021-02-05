import React, { Component } from "react";

import Article from "./Article";
import Container from "react-bootstrap/Container";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.styleObj = props.category.backgroundColor
      ? { backgroundColor: props.category.backgroundColor }
      : {};
    this.styleObj = props.category.background
      ? {
          ...this.styleObj,
          backgroundImage: props.category.background,
          backgroundSize: "cover",
        }
      : { ...this.styleObj };

    this.state = { fill: "black" };
  }
  onHover = (e) => {
    if (!!this.props.category.arrow) {
      e.target.style.textDecoration = "underline";
      e.target.style.color = "rgb(69, 130, 236)";
      this.setState({ fill: "rgb(69, 130, 236)" });
    }
  };
  offHover = (e) => {
    if (!!this.props.category.arrow) {
      e.target.style.textDecoration = "none";
      e.target.style.color = "black";
      this.setState({ fill: "black" });
    }
  };

  render() {
    return (
      <div className="pt-2 pb-4 " style={this.styleObj}>
        <Container>
          <h2
            className="py-4 text-left"
            onMouseEnter={this.onHover}
            onMouseLeave={this.offHover}
          >
            {this.props.category.name}
            {this.props.category.arrow && (
              <svg
                viewBox="0 0 32 40"
                width="2rem"
                height="2rem"
                focusable="false"
                aria-hidden="true"
                fill={this.state.fill}
              >
                <path d="M21.6 14.3L5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"></path>
              </svg>
            )}
          </h2>
          <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-around justify-content-lg-between pb-3">
            {this.props.category.stories.map((article) => (
              <Article
                key={article.headline}
                headline={article.headline}
                image={article.image}
                attribution={article.attribution}
                large={article.large}
                live={article.live}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
