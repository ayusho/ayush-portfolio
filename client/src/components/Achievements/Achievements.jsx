import React from "react";
import CommingSoonPage from "../common/ComingSoon/ComingSoonPage";
import M from "materialize-css";

import Professional from "./Panels/Professional";
import College from "./Panels/College";
import School from "./Panels/School";
import CCA from "./Panels/CCA";

import './achievements.css';

class Achievements extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 achievementCards">
                        <div className="card-title">Professional</div>
                        <Professional />
                    </div>
                    <div className="col s12 m12 achievementCards">
                        <div className="card-title">College</div>
                        <College />
                    </div>
                    <div className="col s12 m12 achievementCards">
                        <div className="card-title">School</div>
                        <School />
                    </div>
                    <div className="col s12 m12 achievementCards">
                        <div className="card-title">Others</div>
                        <CCA />
                    </div>
                </div>
            </div>

        );
    }

};

export default Achievements;
