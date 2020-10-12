import React, {Component} from 'react';
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "../sass/how-works.scss"

class How extends Component {
    render() {
        return (
            <div>
                <div id="hero" className="main">
                    <div className="container">
                        <h1 className="d-flex justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center
                        justify-content-center align-items-xl-center align-items-center text-uppercase">how it works</h1>
                    </div>
                </div>

                <div id="first" className="d-flex flex-column justify-content-center">
                    <div className="container">
                        <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column my-5">
                            <div className="col-lg-6 align-self-center">
                                <div className="d-flex flex-row my-4">
                                    <span>1</span>
                                    <h3 className="mx-4 align-self-center">Sign up</h3>
                                </div>
                                <p className="my-5">Start browsing clothing by the aesthetic or by the mission you want
                                    to support and
                                    create a
                                    profile.</p>
                            </div>
                            <div className="image col-lg-6">
                                <img height="100%" width="100%"
                                     src={"images/how-it-works/buying-online-black-friday.min.png"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="second" className="custom-bg d-flex flex-column justify-content-center">
                    <div className="container ">
                        <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse">
                            <div className="image col-lg-6">
                                <img height="100%" width="100%"
                                     src={"images/how-it-works/buying-online-black-friday.min.png"} alt=""/>
                            </div>
                            <div className="texts col-lg-6 align-self-center">
                                <div className="d-flex flex-row my-4">
                                    <span>2</span>
                                    <h2 className="mx-4 align-self-center">Shop from mission based brands </h2>
                                </div>
                                <p className="my-5">Add items to your cart to shop.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="third" className="d-flex flex-column justify-content-center">
                    <div className="container">
                        <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column my-5">
                            <div className="texts col-lg-6 align-self-center">
                                <div className="d-flex flex-row my-4">
                                    <span>3</span>
                                    <h2 className="mx-4 align-self-center">Increase your impact!</h2>
                                </div>
                                <p className="my-5">Points are added for a category shopper is purchasing from to be
                                    redeemed later and
                                    a tag is displayed at the shopper’s profile reflecting the category the shopper
                                    shopped from..
                                </p>
                            </div>
                            <div className="image col-lg-6">
                                <img height="100%" width="100%"
                                     src={"images/how-it-works/buying-online-black-friday.min.png"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default How;