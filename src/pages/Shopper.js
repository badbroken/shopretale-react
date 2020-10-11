import React, {Component} from 'react';
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "../sass/shopper.scss"

class Shopper extends Component {
    render() {
        return (
            <div>
                <div id="scontact">
                    <div className="row">
                        <div className="container col-lg-7 col-11 mx-auto m-5">
                            <div className="header pb-5">
                                <h3 className="text-center">Shopper Area</h3>
                                <p>We are launching soon. Subscribe to your newsletter and stay updated</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Your Name</label>
                                <input type="text" className="form-control" id="username"/>
                            </div>

                            <form className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" name="email" className="form-control error" id="email" required
                                       pattern="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/"/>
                            </form>
                            <button type="submit" id="cta" className="btn" data-toggle="modal"
                                    data-target="#exampleModalCenter">Subscribe
                            </button>
                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title" id="exampleModalLongTitle">Congratulations!</h3>

                                        </div>
                                        <div className="modal-body">
                                            <p>You've been subscribed to our newsletter!</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Shopper;