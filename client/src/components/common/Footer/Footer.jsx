import React from "react";

import './footerStyles.css'

const Footer = () => {
    return (
        <div className="section white" id="contact-form">
            <div className="row container">
                <h2 className="header">Contact</h2>
                <p className="grey-text text-darken-3 lighten-3">Don't hesitate to reach out. Drop me a mail at <a href = "mailto: ayushojha@gmail.com">ayushojha@gmail.com</a> for any consultancy.</p>
                <div className="contact-me">
                    <a href="https://www.linkedin.com/in/ayushojha" target="_blank"><img src={require('../../../assets/contact/linkedin.png')} className="contact" /></a>
                    <a href="https://www.facebook.com/ayusho" target="_blank"><img src={require('../../../assets/contact/facebook.png')} className="contact social-media" /></a>
                    <a href="https://instagram.com/ayush.0jha" target="_blank"><img src={require('../../../assets/contact/instagram.png')} className="contact social-media" /></a>
                </div>
                <div className="footer-text col s12 m12"><p className="grey-text text-darken-3 lighten-2">Copyright &copy; Ayush Ojha</p></div>
            </div>
        </div>
    );
};

export default Footer;
