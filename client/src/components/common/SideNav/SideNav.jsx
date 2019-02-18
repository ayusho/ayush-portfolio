import React from "react";
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import profileImages from '../../../assets/profile-image/profile';
import backgroundImages from '../../../assets/images/images';
import './sideNavStyles.css';

class SideNav extends React.Component {
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }
    render(){
        return (
            <div className="">
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img alt="" src={backgroundImages[Math.floor(Math.random() * backgroundImages.length)]} />
                        </div>
                        <a href="#user"><img alt="Ayush Ojha" className="circle" src={profileImages[Math.floor(Math.random() * profileImages.length)]} /></a>
                        <a href="#name"><span className="white-text name">Ayush Ojha</span></a>
                        <a href="#email"><span className="white-text email">ayushojha@gmail.com</span></a>
                    </div></li>
                    <li><Link to="/about"><i className="material-icons">person_pin</i>About</Link></li>
                    <li><Link to="/portfolio"><i className="material-icons">assignment</i>Portfolio</Link></li>
                    <li><Link to="/technologies"><i className="material-icons">build</i>Technologies</Link></li>
                    <li><Link to="/education"><i className="material-icons">school</i>Education</Link></li>
                    <li><Link to="/achievements"><i className="material-icons">flag</i>Achievements</Link></li>
                    <li><div className="divider"></div></li>
                    <li><Link to="" className="subheader">Other</Link></li>
                    <li><Link to="/resume" className="waves-effect">Resume</Link></li>
                    <li><Link to="/blog" className="waves-effect">Personal Blog</Link></li>
                </ul>
            </div>
        );
    }

};

export default SideNav;
