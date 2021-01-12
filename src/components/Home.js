import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-10">
        <div className="jumbotron">
          <h1 className="display-4">Hello, Welcome to The Routing React Shop</h1>
          <p className="lead">A shop that exists only to test out React Routes!</p>
          <hr className="my-4" />
          <p>Visit the shop page to check out some sweet imaginary products!</p>
          <p className="lead">
            <Link to="/shop" className="btn btn-primary btn-lg" role="button">
              Shop Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
