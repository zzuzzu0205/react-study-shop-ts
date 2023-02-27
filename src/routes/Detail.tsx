import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import styled from "styled-components";

// 변수 지정
import { Item } from "../App";
import { Style } from "util";

let YellowBtn = styled.button<any>`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")}
  padding: 10px;
`;

function Detail({ item }: { item: Item[] }) {
  let { id } = useParams() as { id: string };
  let searchId = item.find(function (x) {
    return x.id == parseInt(id);
  }) as unknown as Item;

  return (
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="yellow">버튼</YellowBtn>

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
    </div>
  );
}

export default Detail;
