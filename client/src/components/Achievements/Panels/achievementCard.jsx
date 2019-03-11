import React from 'react';

const AchievementCard = (props) => {
    return (
        <div className="card">
            <div className="card-image">
                <img className="materialboxed achievement-images" src={props.image} />
            </div>
            <div className="card-title">{props.title}</div>
            <div className="card-content">
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default AchievementCard;