import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import styled from "styled-components";

// 변수 지정
import { Item } from "../App";
import { Style } from "util";
import { Alert } from "react-bootstrap";

//스타일 컴포넌트
let YellowBtn = styled.button<any>`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")}
  padding: 10px;
`;

function Detail({ item }: { item: Item[] }) {
  let [alert1, setAlert] = useState<boolean>(true);
  let [count, setCount] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert1]);

  useEffect(() => {
    if (isNaN(count) == true) {
      alert("숫자만 입력하세요");
    }
  }, [count]);

  let { id } = useParams() as { id: string };
  let searchId = item.find(function (x) {
    return x.id == parseInt(id);
  }) as unknown as Item;

  return (
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="yellow">버튼</YellowBtn>
      {alert1 == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/" + searchId.id + ".png"}
            width="80%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item[searchId.id].title}</h4>
          <p>{item[searchId.id].content}</p>
          <p>{item[searchId.id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <input
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default Detail;
