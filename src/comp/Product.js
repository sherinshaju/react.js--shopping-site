import React, { Component } from 'react';


class Product extends Component {

  render(){
    return(
      <div className="section mt-5">
        <div className="row">
          {this.props.posts.map((posts,key) => (
          <div className="col-md-3 col-sm-6" key={posts.id}>
              <div className="product-grid mb-4">
                  <div className="product-image">
                      <a href="#">
                          <img className="pic-1" src={posts.image}/>
                          <img className="pic-2" src={posts.imagetwo}/>
                      </a>
                      <ul className="social">
                          <li><button data-toggle="modal" data-target="#product_view" onClick = {  () => this.props.value(posts.id)} data-tip="Quick View"><i className="fa fa-search"></i></button></li>
                          <li><button onClick={() => {this.delete.bind(this, key)}} data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></button></li>
                          <li><a  onClick={this.counter}  data-tip="Add to Cart"><i className="fa fa-shopping-cart">{this.props.count}</i></a></li>
                      </ul>
                      <span className="product-new-label">{key}</span>
                      <span className="product-discount-label">20%</span>
                  </div>
                  <ul className="rating">
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                  </ul>
                  <div className="product-content">
                      <h3 className="title"><a href="#">{posts.name}</a></h3>
                      <div className="price">{posts.price}
                          <span>{posts.offer}</span>
                      </div>
                      <button className="add-to-cart btn btn-info cl-wt" onClick={this.props.click} >+ Add To Cart</button>
                      <input value={posts.id} hidden  />
                  </div>
              </div>
          </div>
            ))}
        </div>

        {this.props.posts.map(posts => (
          <div className="modal fade product_view" id="product_view">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <a href="#" data-dismiss="modal" className="class pull-right"><span className="glyphicon glyphicon-remove"></span></a>
                        <h3 className="modal-title">HTML5 is a markup language</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 product_img">
                                <img src={posts.image} className="img-fluid"/>
                            </div>
                            <div className="col-md-6 product_content">
                                <h4>Product Id: <span>{posts.id}</span></h4>
                                <div className="rating">
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    (10 reviews)
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h3 className="cost"><span className="glyphicon glyphicon-usd"></span> 75.00 <small className="pre-cost"><span className="glyphicon glyphicon-usd"></span> 60.00</small></h3>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <select className="form-control" name="select">
                                            <option value="5" selected="">Color</option>
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
                                            <option value="56" selected="">QTY</option>
                                            <option value="65">1</option>
                                            <option value="56">2</option>
                                            <option value="55">3</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="space-ten"></div>
                                <div className="btn-ground">
                                    <button type="button" className="btn btn-primary mr-3"><span className="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                                    <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-heart"></span> Add To Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
     </div>
    );
  }
}

export default Product;
