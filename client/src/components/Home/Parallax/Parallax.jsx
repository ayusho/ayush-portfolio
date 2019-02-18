import React from 'react';
import images from '../../../assets/images/images';
import profile from '../../../assets/profile-image/profile';

import './parallaxStyles.css';

const Parallax = (profile) => {
    return (
        <div className="parallax-container">
            <div className="parallax"><img src={images[Math.floor(Math.random() * images.length)]}/></div>
        </div>
    );
};

const profileImage = image => {
    return (
        <div>
            <img className="profile-image" src={profile[Math.floor(Math.random() * images.length)]}/>
        </div>
    )
}

export default Parallax;