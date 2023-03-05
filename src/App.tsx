import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import data from "./data";
import Detail from "./routes/Detail";

export interface Item {
  id: number;
  title: string;
  content: string;
  price: number;
}
function App() {
  let [item, setItem] = useState<Item[]>(data);

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
              <Item item={item} setItem={setItem}></Item>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail item={item} />} />
      </Routes>
    </div>
  );
}
function Item({ item, setItem }: { item: Item[]; setItem: any }) {
  let navigate = useNavigate();
  let [addItem, setAdd] = useState<number>(2);
  let [load, setLoad] = useState<number>(0);
  return (
    <>
      <div className="container">
        <div className="row">
          {item.map(function (a, i) {
            return (
              <div className="col-md-4">
                <img
                  onClick={() => {
                    navigate("detail/" + i);
                  }}
                  src={
                    "https://codingapple1.github.io/shop/shoes" +
                    (i + 1) +
                    ".jpg"
                  }
                  width="80%"
                />
                <h4>{item[i].title}</h4>
                <p>{item[i].content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {addItem < 4 ? (
        <button
          onClick={() => {
            <div>{load === 0 && <div>로딩중</div>}</div>;
            axios
              .get(
                "https://codingapple1.github.io/shop/data" + addItem + ".json"
              )
              .then((result) => {
                let copy = [...item, ...result.data];
                setItem(copy);
                setAdd(addItem + 1);
                setLoad(0);
              })
              .catch(() => {
                console.log("실패");
                setLoad(1);
              });
          }}
        >
          더보기..
        </button>
      ) : null}
    </>
  );
}

export default App;
