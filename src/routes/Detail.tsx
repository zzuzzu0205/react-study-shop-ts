import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Detail({ item }: { item: any }) {
  let { id }: any = useParams();
  let searchId: any = item.find(function (x: any) {
    return x.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + "/1.png"} width="80%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item[searchId].title}</h4>
          <p>{item[searchId].content}</p>
          <p>{item[searchId].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
