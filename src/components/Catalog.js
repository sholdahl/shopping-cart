import React, { useEffect } from "react";
import Card from "./Card";
import prod1 from "../media/prod-1.jpg";
import prod2 from "../media/prod-2.jpg";
import prod3 from "../media/prod-3.jpg";
import prod4 from "../media/prod-4.jpg";
import prod5 from "../media/prod-5.jpg";
import prod6 from "../media/prod-6.jpg";

const resizeCards = () => {
    let cardImgs = document.querySelectorAll(".card-img-top");
    let cardImgArray = Array.from(cardImgs);
    cardImgArray.forEach((card) => {
      let width = card.width;
      card.height = width;
    });
  };

const Catalog = ({ setCart, cart }) => {

  useEffect(() => {
    resizeCards();
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-12 hero-image">
        <h1 className="catalog-title">Catalog</h1>
      </div>
      <div className="row m-5 justify-content-center">
        <Card cart={cart} setCart={setCart} title="Chocolate Cookie" img={prod1} />
        <Card cart={cart} setCart={setCart} title="Flaky Cookie" img={prod2} />
        <Card cart={cart} setCart={setCart} title="Tasty Bars" img={prod3} />
        <Card cart={cart} setCart={setCart} title="Crushed Oreos" img={prod4} />
        <Card cart={cart} setCart={setCart} title="Carton of Eggs" img={prod5} />
        <Card cart={cart} setCart={setCart} title="Chocolate Bar" img={prod6} />
      </div>
    </div>
  );
};

export default Catalog;

window.onresize = resizeCards;
