import React, { Component } from 'react';
import Nav from './comp/Nav';
import Css from './css/style.css';
import Carousel from './comp/Carousel';
import Sidebar from './comp/Sidebar';
import Product from './comp/Product';
import Footer from './comp/Footer';



class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
            posts: [
              {
                "id":1,
                "name":"naran",
                "price":"$20.00",
                "offer":"$16.00",
                "image": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
                "imagetwo": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",

              },
              {
                "id":2,
                "name":"Tshirt Puma",
                "price":"$10",
                "offer":"$5",
                "image": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg",
                "imagetwo": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg",

              },
              {
                "id":3,
                "name":"Women's Tshirt",
                "price":"$190",
                "offer":"$98",
                "image": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg",
                "imagetwo": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg",

              },
              {
                "id":4,
                "name":"Men's Plain Tshirt",
                "price":"$152",
                "offer":"$52",
                "image": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg",
                "imagetwo": "http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg",

              },
              {
                "id":5,
                "name":"Women's Dress",
                "price":"$12",
                "offer":"$2",
                "image": "http://bestjquery.com/tutorial/product-grid/demo8//images/img-5.jpg",
                "imagetwo": "http://bestjquery.com/tutorial/product-grid/demo8//images/img-6.jpg",

              },
              {
                "id":6,
                "name":"Men's Jacket",
                "price":"$12",
                "offer":"$2",
                "image": "http://bestjquery.com/tutorial/product-grid/demo8//images/img-1.jpg",
                "imagetwo": "http://bestjquery.com/tutorial/product-grid/demo8//images/img-2.jpg",

              },
            ],
            counter: 0,
            Nav :{
              "home":"Home",
              "mens":"Mens",
              "womens":"Womens",
              "kids":"Kids",
              "contact":"Contact",
            }
          };
          this.handleClick = this.handleClick.bind(this);
        }

        getvalue = () =>{
          this.setState({
            counter : this.state.counter + 1
          })
          alert('added to cart');
        }


      handleClick = (value) => {
         console.log(value);
         this.setState({
           value : this.state.props
         })
       }

       delete(posts){
        const data = this.state.posts.filter(key => key.id !== posts.id)
        this.setState({posts})
      }

  render() {
    return(
      <div>
        <Nav nav={this.state.Nav} label={this.state.counter} />
        <Carousel  />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Product delete={this.delete} count={this.state.counter} value={this.handleClick} click={this.getvalue} posts={this.state.posts} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )};
}


export default App;
