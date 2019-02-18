import React from "react";

import workExperiences from './experienceList';

const ExperienceList = (experience) => {
    return (
        <div className="company">
            <h5 className="header">{experience.experience.company}</h5>
            <h6 className="header">{experience.experience.title}</h6>
            <p className="grey-text text-darken-4 lighten-4">{experience.experience.duration}</p>
            <p className="grey-text text-darken-3 lighten-3">{experience.experience.description}</p>
            {experience.experience.technologies.map(tech => <div className="chip" key={tech}>{tech}</div>)}
        </div>
    )
}

const Experience = () => {
    return (
        <div className="section white">
            <div className="row container">
                <h2 className="header">Work Experience</h2>
                {workExperiences.map(exp => <ExperienceList key={exp.technologies} experience={exp}/>)}
            </div>
        </div>
    );
};

export default Experience;
