import React, { Component } from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Nav from "./comp/Nav";
import Css from "./css/style.css";
import Carousel from "./comp/Carousel";
import Slider from "./comp/Slider";
import Sidebar from "./comp/Sidebar";
import Product from "./comp/Product";
import Footer from "./comp/Footer";
import Cart from "./Cart";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          name: "naran",
          price: "$20.00",
          offer: "$16.00",
          image:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
          imagetwo:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
        },
        {
          id: 2,
          name: "Tshirt Puma",
          price: "$10",
          offer: "$5",
          image:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg",
          imagetwo:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg"
        },
        {
          id: 3,
          name: "Women's Tshirt",
          price: "$190",
          offer: "$98",
          image:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg",
          imagetwo:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg"
        },
        {
          id: 4,
          name: "Men's Plain Tshirt",
          price: "$152",
          offer: "$52",
          image:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg",
          imagetwo:
            "http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg"
        },
        {
          id: 5,
          name: "Women's Dress",
          price: "$12",
          offer: "$2",
          image:
            "http://bestjquery.com/tutorial/product-grid/demo8//images/img-5.jpg",
          imagetwo:
            "http://bestjquery.com/tutorial/product-grid/demo8//images/img-6.jpg"
        },
        {
          id: 6,
          name: "Men's Jacket",
          price: "$12",
          offer: "$2",
          image:
            "http://bestjquery.com/tutorial/product-grid/demo8//images/img-1.jpg",
          imagetwo:
            "http://bestjquery.com/tutorial/product-grid/demo8//images/img-2.jpg"
        }
      ],
      counter: 0,
      Nav: {
        home: "Home",
        mens: "Mens",
        womens: "Womens",
        kids: "Kids",
        contact: "Contact"
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getvalue = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    alert("added to cart");
  };

  handleClick = value => {
    console.log(value);
    this.setState({
      value: this.state.props
    });
  };
  deleteitem = key => {
    console.log(key);
    const filteriteam = this.state.posts.filter(posts => {
      return key !== key;
    });
  };

  render() {
    return (
    <BrowserRouter>
      <div>
        <Nav nav={this.state.Nav} label={this.state.counter} />
        <Carousel />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Slider newposts={this.state.posts} />
              <Product
                deleteitem={this.deleteitem}
                count={this.state.counter}
                value={this.handleClick}
                click={this.getvalue}
                posts={this.state.posts}
              />
            </div>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="./cart" component={Cart} />
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
