import React from "react";
import CommingSoonPage from "../common/ComingSoon/ComingSoonPage";

import "./contactStyles.css";

const Contact = () => {
    return (
        <div>
            <div className="upper-div">

            </div>
            <div className="contact-main">
                dcsdc
            </div>
            <footer>
                <div className="bottom-div">
                    <div className="logo">
                    </div>
                    <div className="tagline">Let's grow together!</div>
                    <div className="social-network">
                        <img src={require("../../assets/contact/facebook.png")} className="social-network facebook" />
                        <img src={require("../../assets/contact/instagram.png")} className="social-network instagram" />
                        <img src={require("../../assets/contact/linkedin.png")} className="social-network linkedin" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
