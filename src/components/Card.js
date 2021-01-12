import React from "react";

const Card = ({ img, title, setCart, cart }) => {
  const handleClick = (e) => {
    setCart(cart + parseInt(e.target.parentNode.parentNode.firstChild.value));
    e.target.parentNode.parentNode.firstChild.value = ""
  };

  return (
    <div className="col-md-6 col-lg-4 col-12 col">
      <div className="card m-4">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <div className="input-group mb-3">
            <input type="number" className="form-control" aria-describedby="basic-addon2" min="0" max="999"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleClick}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
