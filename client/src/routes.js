import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/common/Header/Header';
import HomePage from './components/Home/HomePage';
import SideNav from './components/common/SideNav/SideNav';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Education from './components/Education/Education';
import Technologies from './components/Technologies/Technologies';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

export default (
    <Router>
        <div>
            <Header />
            <SideNav />
            <Route path="/" exact component={HomePage} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/achievements" exact component={Achievements} />
            <Route path="/technologies" exact component={Technologies} />
            <Route path="/education" exact component={Education} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />



        </div>

    </Router>
);