import React from "react";
import CommingSoonPage from "../common/ComingSoon/ComingSoonPage";


import './educationStyles.css';

class Education extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="title"><h3>Education</h3></div>

                <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                <h4>Bachelor of Technology </h4>
                                <span className="card-action">
                                    <a href="#">Graduation year: 2012-16</a>
                                </span>
                                </span>

                                <div className="card-title"><h5>Guru Govind Singh Indraprasth University</h5></div>
                                <p>Completed B.Tech in 2016 with an aggregate of 76% percentage</p>
                            </div>
                        </div>
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                <h4>All India Senior School Certificate Examination</h4>
                                <span className="card-action">
                                    <a href="#">Year: 2012</a>
                                </span>
                                </span>

                                <div className="card-title"><h5>Central Board Of Secondary Education</h5></div>
                                <p>Percentage Score: 78.4%</p>
                            </div>
                        </div>
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                <h4>All India Secondary Certificate Examination</h4>
                                <span className="card-action">
                                    <a href="#">Year: 2010</a>
                                </span>
                                </span>

                                <div className="card-title"><h5>Central Board Of Secondary Education</h5></div>
                                <p>Secured a CGPA of 9.4, highest in the section.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Education;
