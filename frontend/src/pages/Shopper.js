import React, {Component} from 'react';
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "../sass/shopper.scss"
import MailchimpSubscribe from "react-mailchimp-subscribe"

class Shopper extends Component {
    render() {
        return (
                <div id="shopper-contact">
                    <div className="row">
                        <div className="container col-lg-7 col-11 mx-auto m-5">
                            <div className="header pb-5">
                                <h3 className="text-center">Shopper Area</h3>
                                <p>We are launching soon. Subscribe to our newsletter and stay updated</p>
                            </div>
                            <div className="d-flex justify-content-around">
                                <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>
                            </div>

                        </div>
                    </div>
                </div>

        );
    }
}


export default Shopper;