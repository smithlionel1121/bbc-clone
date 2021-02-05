import React from "react";
import "./App.css";

import News from "./News";

import Banner from "./components/Banner";
import NavBar from "./components/Nav";
import Category from "./components/Category";
import Footer from "./components/Footer";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid className="p-0">
        <Container>
          <h1
            className="text-left pt-2 pb-0 mb-0"
            style={{ paddingBottom: "2rem" }}
          >
            Welcome to the BBC
          </h1>
        </Container>
        {News.map((category) =>
          !!category.banner ? (
            <Banner key={category.title} category={category} />
          ) : (
            <Category key={category.name} category={category} />
          )
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
