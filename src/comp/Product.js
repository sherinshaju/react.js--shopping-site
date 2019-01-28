import React, { Component } from 'react';
import Model from './Model';

class Product extends Component {
  constructor(){
    super();
    this.state ={
      dataModal:{
        id:"",
        name:"",
        price:"",
        offer:"",
        image: "",
        imagetwo: ""
      }
    }
  }
  getModal =(posts) => {
   this.setState({
     dataModal:posts
   })
  }
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
                          <li><button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick = {  () => this.getModal(posts)} data-tip="Quick View"><i className="fa fa-search"></i></button></li>
                          <li><button className="btn btn-primary mr-1 ml-1" key={posts.id} data-tip="Add to Wishlist" onClick= {this.props.deleteitem(posts.id)}><i className="fas fa-trash"></i></button></li>
                          <li><button  className="btn btn-primary" onClick={this.counter}  data-tip="Add to Cart"><i className="fa fa-shopping-cart">{this.props.count}</i></button></li>
                      </ul>
                      <span className="product-new-label">{posts.id}</span>
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
                      <div className="price">{posts.offer}
                          <span>{posts.price}</span>
                      </div>
                      <button className="add-to-cart btn btn-info cl-wt" onClick={this.props.click} >+ Add To Cart</button>
                      <input value={posts.id} hidden  />
                  </div>
              </div>
          </div>
            ))}
            <Model count={this.props.click}  name={this.state.dataModal} />
        </div>
     </div>
    );
  }
}

export default Product;
