import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="section">
        <div className="card mt-5">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Brands </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label">Puma</span>
                </label>
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label">Diesel</span>
                </label>
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label">Hugo Boss</span>
                </label>
              </div>
            </div>
          </article>
        </div>
        <div className="card mt-1">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Choose type </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadio"
                    value=""
                  />
                  <span className="form-check-label">Kids's wear</span>
                </label>
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadio"
                    value=""
                  />
                  <span className="form-check-label">Men's wear</span>
                </label>
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadio"
                    value=""
                  />
                  <span className="form-check-label">Women's wear</span>
                </label>
              </div>
            </div>
          </article>
        </div>
        <div className="card mt-1">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Range input </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="$0"
                    />
                  </div>
                  <div className="form-group col-md-6 text-right">
                    <label>Max</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="$1,0000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="card mt-1">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Selection </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <div className="custom-control custom-checkbox mb-2">
                  <span className="float-right badge badge-light round">
                    52
                  </span>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Check1"
                  />
                  <label className="custom-control-label" htmlFor="Check1">
                    {" "}
                    T-Shirts{" "}
                  </label>
                </div>

                <div className="custom-control custom-checkbox mb-2">
                  <span className="float-right badge badge-light round">
                    132
                  </span>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Check2"
                  />
                  <label className="custom-control-label" htmlFor="Check2">
                    Shirts{" "}
                  </label>
                </div>

                <div className="custom-control custom-checkbox mb-2">
                  <span className="float-right badge badge-light round">
                    17
                  </span>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Check3"
                  />
                  <label className="custom-control-label" htmlFor="Check3">
                    Sarees
                  </label>
                </div>

                <div className="custom-control custom-checkbox mb-2">
                  <span className="float-right badge badge-light round">7</span>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Check4"
                  />
                  <label className="custom-control-label" htmlFor="Check4">
                    {" "}
                    Tops{" "}
                  </label>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
export default Sidebar;
