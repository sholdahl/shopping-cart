import React from "react";
import { BagFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = ({ title, cart }) => {
  return (
    <div className="row no-gutters">
      <div className="col-12">
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
              Routing React Inc.
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/shop">
                  Shop
                </Link>
              </div>
            </div>
            <div className="cart-holder">
              <span className="shopping-cart-counter">{cart}</span>
              <BagFill color="#fff" size={20} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
