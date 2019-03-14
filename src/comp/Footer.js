import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="section">
        <div className="search-text">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="form">
                <form id="search-form" className="form-search form-horizontal">
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search"
                  />
                  <button type="submit" className="btn-search">
                    Search{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <ul className="list-inline d-inline-flex">
                  <li class="mr-4">
                    <a href="#">
                      <i className="fab fa-facebook  cl-wt" />
                    </a>
                  </li>

                  <li class="mr-4">
                    <a href="#">
                      <i className="fab fa-dropbox cl-wt" />
                    </a>
                  </li>

                  <li class="mr-4">
                    <a href="#">
                      <i className="fab fa-flickr  cl-wt" />
                    </a>
                  </li>

                  <li class="mr-4">
                    <a href="#">
                      <i className="fab fa-github cl-wt" />
                    </a>
                  </li>

                  <li class="mr-4">
                    <a href="#">
                      <i className="fab fa-linkedin cl-wt" />
                    </a>
                  </li>

                  <li class="mr-4">
                    <a href="#">
                      <i className="fab fa-tumblr  cl-wt" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus  cl-wt" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 col-sm-6 col-xs-12">
                <ul className="menu list-inline d-inline-flex">
                  <li>
                    <a href="#">Home</a>
                  </li>

                  <li>
                    <a href="#">About</a>
                  </li>

                  <li>
                    <a href="#">Blog</a>
                  </li>

                  <li>
                    <a href="#">Gallery </a>
                  </li>

                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright">
          <div className="container">
            <div className="row text-center">
              <p className="text-center">Copyright © 2017 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
