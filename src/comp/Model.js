import React, { Component } from "react";

class Model extends Component {
  render() {
    console.log(this.props.name);
    return (
      <React.Fragment>
        {this.props.name && (
          <div className="modal fade product_view" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <a href="#" data-dismiss="modal" className="class pull-right">
                    <span className="glyphicon glyphicon-remove" />
                  </a>
                  <h3 className="modal-title">{this.props.name.name}</h3>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 product_img">
                      <img src={this.props.name.image} className="img-fluid" />
                    </div>
                    <div className="col-md-6 product_content">
                      <h4>
                        Product Id: <span>{this.props.name.id}</span>
                      </h4>
                      <div className="rating">
                        <span className="glyphicon glyphicon-star" />
                        <span className="glyphicon glyphicon-star" />
                        <span className="glyphicon glyphicon-star" />
                        <span className="glyphicon glyphicon-star" />
                        <span className="glyphicon glyphicon-star" />
                        (10 reviews)
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                      <h3 className="cost">
                        <span className="glyphicon glyphicon-usd" />{" "}
                        {this.props.name.offer}{" "}
                        <small className="pre-cost">
                          <span className="glyphicon glyphicon-usd" />{" "}
                          {this.props.name.price}
                        </small>
                      </h3>
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <select className="form-control" name="select">
                            <option value="5" selected="">
                              Color
                            </option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="gold">Gold</option>
                            <option value="rose gold">Rose Gold</option>
                          </select>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <select className="form-control" name="select">
                            <option value="2">Capacity</option>
                            <option value="33">16GB</option>
                            <option value="33">32GB</option>
                            <option value="333">64GB</option>
                            <option value="333">128GB</option>
                          </select>
                        </div>

                        <div className="col-md-4 col-sm-12">
                          <select className="form-control" name="select">
                            <option value="56" selected="">
                              QTY
                            </option>
                            <option value="65">1</option>
                            <option value="56">2</option>
                            <option value="55">3</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-ten" />
                      <div className="btn-ground">
                        <button
                          type="button"
                          onClick={this.props.count}
                          className="btn btn-primary mr-3"
                        >
                          <span className="glyphicon glyphicon-shopping-cart" />{" "}
                          Add To Cart
                        </button>
                        <button type="button" className="btn btn-primary">
                          <span className="glyphicon glyphicon-heart" /> Add To
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Model;
