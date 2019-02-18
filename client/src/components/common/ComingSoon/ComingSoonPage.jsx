import React from "react";
import myImage from "../../../assets/profile-image/profile";
import './comingSoonStyles.css';

const ComingSoonPage = () => {
    return (
        <div className="blank-page">
            <h1>Oops...</h1>
            <h4>I am currently developing this page, please do come back.</h4>
            <img src={myImage[0]} className="my-image" />
        </div>
    );
};

export default ComingSoonPage;
