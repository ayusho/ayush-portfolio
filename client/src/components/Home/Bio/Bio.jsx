import React from "react";

import './bioStyles.css';
const Bio = () => {
    return (
        <div className="section transparent" id="about-me">
            <div className="row container profile">
                <div className="profile-text">
                <h2 className="header">Full Stack Javascript developer</h2>
                <h5 className="grey-text text-darken-3 lighten-3">I am a full stack Javascript Web developer working at Sopra Steria India. I enjoy making awesome web apps that look really cool.</h5>
                <div className="btn btn-large">Let's make something special.</div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
