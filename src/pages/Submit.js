import React, {Component} from 'react';
import "bootstrap"
import "../sass/contact.scss"

class Submit extends Component {
    render() {
        return (
            <div>
                <div id="contact">
                    <div className="row">
                        <div className="container col-lg-7 col-10">
                            <div className="header">
                                <h3>Contact Us</h3>
                                <p>Reach out to us and submit your story</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Your Name</label>
                                <input type="text" className="form-control" id="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="compname">Retail Name</label>
                                <input type="text" className="form-control" id="compname"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="compemail">Retail Email</label>
                                <input type="email" className="form-control" id="compemail"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="compweb">Retail Website</label>
                                <input type="text" className="form-control" id="compweb"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" className="form-control" id="phone"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">How did you hear about us?</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Facebook</option>
                                    <option>LinkedIn</option>
                                    <option>Twitter</option>
                                    <option>Instagram</option>
                                    <option>Friends</option>
                                </select>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Your Story</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms
                                        & conditions</label>
                                </div>
                                <button type="submit" className="btn">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Submit;