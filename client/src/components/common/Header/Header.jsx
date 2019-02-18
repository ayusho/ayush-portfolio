import React from "react";
import M from 'materialize-css';
import SideNav from '../../common/SideNav/SideNav';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './headerStyles.css'

class Header extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }
    render() {
        return (
            <div className="navbar-fixed">
                <div>
                    <nav className="nav-wrapper white header">
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <Link to="/" className="brand-logo center">Ayush Ojha</Link>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
};

export default Header;
