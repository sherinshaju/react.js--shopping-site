import React, { Component } from "react";
import {Link,NavLink } from 'react-router-dom';
import App from "../App";
import Cart from "./Cart";


class Nav extends Component {
  render() {
    return (
      <Router>
      <div className="section">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              {" "}
              <img className="logo" src={require("../images/bag.png")} />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.props.nav.womens}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item">
                      Action
                    </a>
                    <a className="dropdown-item">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" >
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href=""  className="nav-link">
                    {this.props.nav.kids}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    {this.props.nav.contact}
                  </a>
                </li>
                <button
                  type="button"
                  className="btn btn-outline-dark ml-3 mr-3"
                >
                  Sign Up
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Login
                </button>
                <i className="fas fa-cart-arrow-down ml-3">
                  {" "}
                  <span className="badge badge-warning">
                    {this.props.label}
                  </span>
                </i>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={App} />
        <Route path="./Cart" component={Cart} />
      </div>
      </Router>
    );
  }
}

export default Nav;
