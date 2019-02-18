import React from "react";

import './portfolioStyles.css';

const PortfolioCard = (project) => {
    console.log(project);
    return (
        <div class="col s12 m4 l4">
            <h4 class="header">{project.projects.title}</h4>
            <div class="card horizontal">
                <div class="card-image">
                    <img src={project.projects.image} />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>{project.projects.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">{project.projects.link}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
