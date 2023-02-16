import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import data from "./data";
function App() {
  return (
    <div className="App">
      <Navbar bg="white" variant="white" className="mainBar">
        <Container className="mainBarItm">
          <Navbar.Brand href="#">SAMSUNG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">제품</Nav.Link>
            <Nav.Link href="#">이벤트선물하기</Nav.Link>
            <Nav.Link href="#">갤럭시캠퍼스스토어</Nav.Link>
            <Nav.Link href="#">e-식품관</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Item></Item>
    </div>
  );
}
function Item() {
  let [item] = useState<any>(data);
  return (
    <>
      <div className="container">
        <div className="row">
          {item.map(function (a: number, i: number) {
            return (
              <div className="col-md-4">
                <img
                  src={process.env.PUBLIC_URL + "/" + i + ".png"}
                  width="80%"
                />
                <h4>{item[i].title}</h4>
                <p>{item[i].content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
