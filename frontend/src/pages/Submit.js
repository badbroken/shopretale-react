import React, {useState} from 'react';
import axios from 'axios';
import "bootstrap"
import "../sass/contact.scss"

const Submit = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        retailName: '',
        email: '',
        retailSite: '',
        phone: "",
        address: "",
        hearAbout: "",
        userMessage: ""
    })

    const formValues = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }
    const register = async (event) => {
        event.preventDefault();
        // When sending data from Front to Back, it should be sent as JSOn format
        const body = JSON.stringify({
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            retailName: userDetails.retailName,
            email: userDetails.email,
            retailSite: userDetails.retailSite,
            phone: userDetails.phone,
            address: userDetails.address,
            hearAbout: userDetails.hearAbout,
            userMessage: userDetails.userMessage
        })
        const res = await axios.post("/api/", body , {
            headers: {
                'Content-type':'application/json'
            }
        })
        setUserDetails({
            ...userDetails,
            message: res.data.message
        })
    }

        return (
            <div>
                <div id="contact">
                    <div className="row">
                        <div className="container col-lg-7 col-10">
                            <div className="header">
                                <h3>Contact Us</h3>
                                <p>Reach out to us and submit your story</p>
                            </div>
                            <form onSubmit={register}>
                                <div className="row form-group">
                                    <div className="col">
                                        <label htmlFor="firstname">First Name</label>
                                        <input type="text" name="firstName" id="firstname" className="form-control" placeholder="First name" onChange={formValues}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input type="text" name="lastName" className="form-control" id="lastname" placeholder="Last name" onChange={formValues}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="retail-name">Retail Name</label>
                                    <input type="text" name="retailName" className="form-control" id="retailName" onChange={formValues}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Retail Email</label>
                                    <input type="email" name="email" className="form-control" id="email" onChange={formValues}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="retail-site">Retail Website</label>
                                    <input type="text" name="retailSite" className="form-control" id="retailSite" onChange={formValues}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" name="phone" className="form-control" id="phone" onChange={formValues}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="string" name="address" className="form-control" id="address" onSelect={formValues}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hear-about">How did you hear about us</label>
                                    <select defaultValue={'default'} className="form-control" name="hearAbout" id="hear-about" onChange={formValues}>
                                        <option value="default" disabled>Select Platform</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Google">Google</option>
                                        <option value="Friends">Friends</option>
                                        <option value="Instagram">Instagram</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="userMessage">Your Story</label>
                                    <textarea name="userMessage" className="form-control" id="userMessage" rows="3" onChange={formValues}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                {userDetails.message ?
                                    <h1 className="resultMessage">{userDetails.message}</h1> :
                                    null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Submit;