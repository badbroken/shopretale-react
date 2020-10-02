import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../sass/helpers/_navigation.scss"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

class Header extends Component {
    const
    render() {
        return (
            <div className="navigation">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                        <Link to="/">
                            <a href="#/">
                                <img src="images/logo.png" alt=""/>
                            </a>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <Link to="/about">
                                    <li className="nav-item">
                                        <a href="#/" className="nav-link">About us</a>
                                    </li>
                                </Link>

                                <Link to="/how-it-works">
                                    <li className="nav-item">
                                        <a href="#/" className="nav-link" >How it works</a>
                                    </li>
                                </Link>

                                <Link to="/submit">
                                    <li className="nav-item">
                                        <a href="#/" className="nav-link">Submit Your Story</a>
                                    </li>
                                </Link>

                            </ul>
                        </div>
                        <div className="button">
                            <Link to="/shopper">
                                <a href="#/" className="btn" >Get Started</a>
                            </Link>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;