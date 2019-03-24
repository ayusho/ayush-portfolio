import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./contactStyles.css";

const Contact = () => {
    return (
        <div className="">
            <div className="row contact-form">
                <p>Drop me a message</p>
                <form className="col s12 m4 offset-m4 card">
                    <div className="input-field col s12">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">Full Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="row card-content">
                        <p>Send me your message, I will get back to you soon.</p>
                        <div className="input-field col s12">
                            <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                            <label htmlFor="textarea2">Message</label>
                        </div>
                        <button className="btn btn-large waves-effect waves-light col s12 m6 offset-m3" type="submit" name="action">Send
                        </button>
                    </div>
                </form>
            </div>
            <div className="contact-footer">
                <h5> Or </h5>
                <div>
                    Follow me on Social Media.
                    <div>
                        <a href="https://www.facebook.com/ayusho" target="_blank"><FontAwesomeIcon icon={["fab", "facebook"]} size="lg" size="4x" color="#3578E5" className="social" /></a>
                        <a href="https://instagram.com/ayush.0jha" target="_blank"><FontAwesomeIcon icon={["fab", "instagram"]} size="lg" size="4x" color="gray" className="social" /></a>
                        <a href="https://www.linkedin.com/in/ayushojha" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" size="4x" color="#0077B5" className="social" /></a>
                        <a href="https://youtube.com/mrayushojha" target="_blank"><FontAwesomeIcon icon={["fab", "youtube"]} size="lg" size="4x" color="red" className="social" /></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
