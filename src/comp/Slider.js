import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="carouselExample" className="carouselPrograms carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
                <div className="carousel-item col-md-4  active">
                  <div className="panel panel-default">
                      <div className="panel-thumbnail">
                         <img src={this.props.newposts.image} />
                      </div>
                    </div>
                </div>
                
                <div className="carousel-item col-md-4 ">
                  <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 3" className="thumb">
                        <img className="" src="//via.placeholder.com/600x400?text=2" alt="slide 2"/>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="carousel-item col-md-4 ">
                  <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 4" className="thumb">
                        <img className="img-fluid" src="//via.placeholder.com/600x400?text=3" alt="slide 3"/>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="carousel-item col-md-4 ">
                    <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 5" className="thumb">
                        <img className="img-fluid" src="//via.placeholder.com/600x400?text=4" alt="slide 4"/>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="carousel-item col-md-4 ">
                  <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 6" className="thumb">
                          <img className="img-fluid" src="//via.placeholder.com/600x400?text=5" alt="slide 5"/>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="carousel-item col-md-4 ">
                  <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 7" className="thumb">
                          <img className="img-fluid" src="//via.placeholder.com/600x400?text=6" alt="slide 6"/>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="carousel-item col-md-4 ">
                  <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 8" className="thumb">
                          <img className="img-fluid" src="//via.placeholder.com/600x400?text=7" alt="slide 7"/>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="carousel-item col-md-4  ">
                    <div className="panel panel-default">
                      <div className="panel-thumbnail">
                        <a href="#" title="image 2" className="thumb">
                        <img className="img-fluid" src="//via.placeholder.com/600x400?text=8" alt="slide 8"/>
                        </a>
                      </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
   </React.Fragment>
    );
  }
}


export default Slider;
