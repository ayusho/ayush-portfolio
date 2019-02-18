import React from "react";

import skills from '../../../assets/skills/skills';

import './skillsStyles.css';

const Skills = () => {
    return (
        <div className="section white">
            <div className="row container">
                <h2 className="header">Skills &amp; Technologies</h2>
                <h5 className="header"></h5>
                <p className="grey-text text-darken-3 lighten-3"></p>
                {skills.map(skill => <img src={skill} key={skill} className="skill" />)}
            </div>
        </div>
    );
};

export default Skills;
