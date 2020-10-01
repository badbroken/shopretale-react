import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "../sass/home.scss"

class Home extends Component {
    render() {
        return (
            <div>
                <div id="home">
                    <div className="container">
                        <div className="left-text">
                            <h1>Know the story of the brand you are shopping from</h1>
                            <p>Wear the story you want to tell. Discover brands by aesthetics or their unique
                                stories and support
                                the mission they are on.</p>
                            <div className="button">
                                <Link to="/shopper">
                                    <a className="btn" href="#">Join Us</a>
                                </Link>
                            </div>
                        </div>

                        <img src="images/sec-home/ShopRetale Image 1.png" alt=""/>
                        <img src="images/sec-home/model-in-gold-fashion 1.png" alt=""/>
                        <img src="images/sec-home/fashion-model-in-red-suit 1.png" alt=""/>
                    </div>
                </div>
                <div id="feature">
                    <h4>Supported by Wonsulting</h4>
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <div className="left-side d-inline-flex flex-column justify-content-center">
                                <h3>WHAT WE CREATED</h3>
                                <div className="d-inline-flex">
                                    <p>A platform to browse mission based brands. We have categorized brands by
                                        their
                                        <strong>aesthetic</strong> and
                                        <strong>the impact they are creating</strong> to curate a meaningful
                                        shopping experience.</p>
                                </div>
                                <div className="d-inline-flex my-5">
                                    <Link to="/shopper">
                                        <button className="btn px-5">Know More</button>
                                    </Link>

                                </div>

                            </div>
                            <div className="right-side d-flex flex-row align-items-center my-5">
                                <div className="card second mx-1">
                                    <img src="images/feature/ShopRetale Image 3.png" alt=""/>

                                    <div className="card-footer">Women Owned Business</div>
                                </div>
                                <div className="nested-right">
                                    <div className="card first my-1">
                                        <img src="images/feature/casual-urban-menswear 1.png" alt=""/>
                                        <div className="card-footer">Minimal</div>
                                    </div>
                                    <div className="card third">
                                        <img src="images/feature/professional-man-smiling 1.png" alt=""/>
                                        <div className="card-footer">Black Owned Business</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="why-us">
                    <div className="container">
                        <div className="row">
                            <div className="left col-xl-5 col-lg-5 d-flex flex-column justify-content-center">
                                <span>“Small businesses need to stand out to succeed instead of blending into a faceless
                                marketplace.”</span>
                                <p>— A Small Business Owner</p>
                            </div>
                            <div className="middle col-xl-2 col-lg-2 d-flex flex-column justify-content-center">
                                <img src="images/why-arrow.png" alt=""/>
                            </div>
                            <div className="right col-xl-5 col-lg-5">
                                <h3>WHY WE CREATED IT</h3>
                                <p>We believe every brand has a story to tell that empowers their mission. <u>We are
                                    here to support these
                                    brands by bringing out their stories.</u></p>
                                <button className="btn my-5">Stories</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="testimonial">
                    <div className="container">
                        <div className="header">
                            <h3>WHAT PEOPLE HAVE TO SAY</h3>
                        </div>
                        <div className="row">
                            <div className="left col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-6">
                                <div className="card bg-transparent border-0">
                                    <img className="card-img-top align-self-center"
                                         src="images/testimonial/Thomas%20Chow%201.png"
                                         alt=""/>
                                    <div className="card-body text-center">
                                        <p><strong>Thomas Chow, <br/>Co-Founder of ShopRetale</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="right col-xl-8 col-lg-8 col-md-8 col-sm-7 col-xs-6 align-self-center">
                                <p>"I was always surrounded by local businesses with history and character growing up in
                                    the small island city of Alameda. The landscape of the local mom-and-pop stores
                                    today lags behind technology, ShopRetale
                                    helps ease this pain. I hope to continue working with my amazing team to make
                                    mission-oriented businesses and value-based shopping more accessible!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;