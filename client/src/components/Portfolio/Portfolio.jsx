import React from "react";
import projects from './projects';
import PortfolioCard from './PortfolioCard';
import CommingSoonPage from '../common/ComingSoon/ComingSoonPage';
import './portfolioStyles.css';

const Portfolio = () => {
    return (
        <div className="row portfolio-card">
            <h3 className="portfolio-header">Portfolio</h3>
            {(projects.length > 0) ? projects.map(project => <PortfolioCard projects={project} />) : <CommingSoonPage />}
        </div>
    );
};

export default Portfolio;
