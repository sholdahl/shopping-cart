import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="col-4">
      <div className="card m-5">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
