import React, { Component } from 'react';


class Nav extends Component {

  render(){
    return(
      <div className="section">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#"> <img className="logo" src={require ("../images/bag.png")}/> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">{this.props.nav.home} <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.nav.mens}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.nav.womens}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.nav.kids}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.nav.contact}</a>
                </li>
                <button type="button"  className="btn btn-outline-dark ml-3 mr-3">Sign Up</button>
                <button type="button"  className="btn btn-outline-dark">Login</button>
                <i  className="fas fa-cart-arrow-down ml-3"> <span className="badge badge-warning">{this.props.label}</span></i>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  };
}

export default Nav;
