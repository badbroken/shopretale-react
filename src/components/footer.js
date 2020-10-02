import React, {Component} from 'react';
import "../sass/helpers/_footer.scss"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="left col-md-4">
                            <h3>ShopRetale</h3>
                            <div className="icons mx-0">
                                <a href="#/"><i className="fab fa-facebook fa-2x text-white"/></a>
                                <a href="#/"><i className="fab fa-instagram fa-2x text-white"/></a>
                                <a href="#/"><i className="fab fa-twitter-square fa-2x text-white"/></a>
                            </div>
                            <p>©2020ShopRetale</p>

                        </div>

                        <div className="right col-md-8">
                            <p>Join us to collectively make an impact!</p>
                            <p>We promise we don’t spam</p>
                            <br/>
                            <hr/>
                            <h3>Contact Us: shopretale@gmail.com</h3>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Footer;