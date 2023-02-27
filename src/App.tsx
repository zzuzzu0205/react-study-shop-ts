import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import data from "./data";
import Detail from "./routes/Detail";

export interface Item {
  id: number;
  title: string;
  content: string;
  price: number;
}
function App() {
  let [item] = useState<Item[]>(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="white" variant="white" className="mainBar">
        <Container className="mainBarItm">
          <Navbar.Brand href="/">SAMSUNG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("detail");
              }}
            >
              제품
            </Nav.Link>
            <Nav.Link href="#">이벤트선물하기</Nav.Link>
            <Nav.Link href="#">갤럭시캠퍼스스토어</Nav.Link>
            <Nav.Link href="#">e-식품관</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Item item={item}></Item>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail item={item} />} />
      </Routes>
    </div>
  );
}
function Item({ item }: { item: any }) {
  let navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          {item.map(function (a: number, i: number) {
            return (
              <div className="col-md-4">
                <img
                  onClick={() => {
                    navigate("detail/" + i);
                  }}
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
