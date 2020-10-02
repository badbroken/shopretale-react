import React, {Component} from 'react';
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "../sass/about.scss"

class About extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="container d-flex">
                        <h1 className="align-self-center">We are building a community to empower mission driven
                            businesses.</h1>
                    </div>
                </div>

                <div className="feature d-flex flex-column justify-content-center">
                    <h4>Supported by Wonsulting</h4>
                    <div className="container  py-5">
                        <div className="row">
                            <div className="left-side col-xl-7">
                                <h3 className="py-5 text-uppercase">how it began</h3>
                                <div className="d-inline-flex">
                                    <p>While walking on the streets of Toronto and checking out clothing stores, one of us
                                        saw a lot
                                        of these businesses had a story about why they started that made them special or a
                                        unique
                                        service that made them standout. These stories and services connected the loyal
                                        shoppers to
                                        these stores.
                                        <br/> <br/>
                                        After speaking with small business owners we realized there is a lack of
                                        platforms that
                                        bring out the true essense of a local business. As easy as it is for bigger
                                        brands to be
                                        identified on a large marketplace, small businesses struggle to find their voice
                                        due to lack
                                        of funds for adpsend, etc and the COVID-19 pandemic intensified the struggle
                                        further.
                                        <br/><br/>
                                        <strong>ShopRetale was born to make mission driven-brands standout through
                                            storytelling and
                                            to
                                            support the aftermath of the events imacting the world - COVID-19
                                            pandemic, Black Lives
                                            Matter protests, climate change.</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="right-side col-xl-5">
                                <img src="images/about-home/young-woman-sits-and-stares 2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-2 d-flex flex-column justify-content-center ">
                    <div className="container py-5">
                        <div className="row">
                            <div className="left-side col-xl-5">
                                <img height="100%" src="images/about-home/rich-red-fashion 1.png" alt=""/>
                            </div>
                            <div className="right-side col-xl-7 d-flex flex-column justify-content-center">
                                <h3 className="pb-5 text-uppercase">our vision</h3>
                                <div className="d-inline-flex">
                                    <p><strong>We see a world where shopping isn't just about fashion, but also about
                                        empowering the
                                        community</strong>
                                        <br/> <br/>
                                        We are creating a space where retailers can share their stories with the world
                                        and shoppers can
                                        find and buy clothing to create a meaningful impact on the community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;