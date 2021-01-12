import React from "react";
import Card from "./Card";
import prod1 from "../media/prod-1.jpg";

const Catalog = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 hero-image">
        <h1 className="catalog-title">Catalog</h1>
      </div>
      <div className="row m-5 justify-content-center">
        <Card title="Title" img={prod1} />
        <Card title="Title" img={prod1} />
        <Card title="Title" img={prod1} />
        <Card title="Title" img={prod1} />
        <Card title="Title" img={prod1} />
        <Card title="Title" img={prod1} />
      </div>
    </div>
  );
};

export default Catalog;
