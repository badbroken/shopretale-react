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

                <div className="feature ">
                    <h4>Supported by Wonsulting</h4>
                    <div className="container py-5">
                        <div className="row">
                            <div className="left-side col-xl-7 mt-5 mb-5">
                                <h3 className="py-5 text-uppercase">how it began</h3>
                                <div className="d-inline-flex">
                                    <p>While walking on the streets of Toronto and checking out clothing stores, one of
                                        us
                                        saw a lot
                                        of these businesses had a story about why they started that made them special or
                                        a
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
                                <img src={"images/about-home/young-woman-sits-and-stares 2.min.png"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature-2">
                    <div className="container py-5">
                        <div
                            className="row d-flex flex-xl-row flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse">
                            <div className="left-side col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                <img height="100%" src={"images/about-home/rich-red-fashion 1.min.png"} alt=""/>
                            </div>
                            <div className="right-side col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 mt-5 mb-5">
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

                <div className="values">
                    <div className="container">
                        <h3 className="text-uppercase my-5">our core values <br/></h3>
                        <div className="d-flex flex-xl-row flex-column py-5">
                            <div className="col-xl-3 mb-5 mb-lg-0 pr-lg-5">
                                <span>1</span>
                                <br/> <br/> <br/>
                                <h3>Community Value</h3>
                                <br/>
                                <p>Small businesses are the backbone of the economy and we are here to support
                                    them by sharing their
                                    stories and helping shoppers find clothing that's not just fashionable but
                                    also creates a
                                    positive
                                    impact on the community.</p>
                            </div>
                            <div className="col-xl-3 px-lg-5 mb-5 mb-lg-0">
                                <span>2</span>
                                <br/> <br/> <br/>
                                <h3>Impact</h3>
                                <br/>
                                <p>We are creating a measurable impact that both the shoppers and retailers can
                                    track.</p>
                            </div>
                            <div className="col-xl-3 px-lg-5 mb-5 mb-lg-0">
                                <span>3</span>
                                <br/> <br/> <br/>
                                <h3>Diversity and Inclusion</h3>
                                <br/>
                                <p>Wherever you are from in the world, we welcome you. We like brand stories
                                    that are creating an
                                    impact on the community or identify with a unique niche.</p>
                            </div>
                            <div className="col-xl-3 px-lg-5">
                                <span>4</span>
                                <br/> <br/> <br/>
                                <h3>Data-driven approach</h3>
                                <br/>
                                <p>We took a data-driven appproach while building ShopRetale that helped us
                                    focus on the smallest
                                    details to better serve both the shoppers and retailers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="our-team">
                    <div className="container">
                        <h3 className="text-uppercase">Team</h3>

                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 py-5 py-xl-0">
                                <div className="card">
                                    <a href={"https://www.linkedin.com/in/athiyarastogi/"} target="_blank"><img
                                        src={"images/team/Athiya.min.png"} className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Athiya Rastogi</h5>
                                        <p className="card-text">Product Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pb-5 pb-xl-0">
                                <div className="card">
                                    <a href={"https://www.linkedin.com/in/thomas-c1/"} target="_blank"><img
                                        src={"images/team/Thomas.min.png"} className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Thomas Chow</h5>
                                        <p className="card-text">Business Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pb-5 pb-xl-0">
                                <div className="card">
                                    <a href={"https://www.linkedin.com/in/sakshi--kabra/"} target="_blank"><img
                                        src={"images/team/Sakshi.min.png"} className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Sakshi Kabra</h5>
                                        <p className="card-text">Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pb-5 pb-xl-0">
                                <div className="card">
                                    <a href={"https://www.linkedin.com/in/shajedulhasan/"} target="_blank"><img
                                        src={"images/team/Vernon.min.png"} className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Shajedul Hasan</h5>
                                        <p className="card-text">Developer</p>
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

export default About;