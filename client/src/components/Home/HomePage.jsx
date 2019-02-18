import React from "react";
import M from "materialize-css";
import Bio from './Bio/Bio';
import Parallax from './Parallax/Parallax';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Footer from '../../components/common/Footer/Footer';
import SideNav from '../../components/common/SideNav/SideNav';

class HomePage extends React.Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    }
    render() {
        return (
            <div>
                <Bio />
                <Parallax className="parallax" />
                <Skills />
                <Parallax className="parallax" />
                <Experience />
                <Parallax className="parallax" />
                <Footer />
            </div>
                );
            }
            
};
        
export default HomePage;
