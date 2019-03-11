import React from "react";
import M from "materialize-css";


import "./aboutStyles.css";

class About extends React.Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    }

    render() {
        return (
            <div className="about-page">
                <section>
                    <div className="section-div">
                        <div>
                            <img className="profile-pic" src={require('../../assets/profile-image/profile1.jpg')} />
                        </div>
                    </div>
                </section>
                <div className="intro-container">
                    <div className="intro-container-div">
                    <div >
                        <h2 className="header-class">Hello, I am Ayush</h2>
                    </div>
                    <div className="intro-text">
                        <h5>I am currently working at Sopra Steria as a Full Stack Developer. I have also worked on Docker Technologies and Cloud. I am a curious person by nature, and I look for perfection. I have an eye for marketing and I love dancing.</h5>
                    </div>
                    </div>

                    <div className="row more-intro">
                        <div className="col s12 m4 tech-intro-div">
                            <div className="more-intro-container">
                                <div className="">
                                    <img src={require("../../assets/skills/frontend.png")}></img>
                                    <h5 className="role">Frontend developer</h5>
                                    <p>I just love making things from scratch and try making them look good. I look out for ideas, and bring my creativity to reality by designing a UI that looks just perfect. </p>
                                </div>
                                <div>
                                    <h5>Stack I use</h5>
                                    <p>HTML, CSS, Javascript, React, Materialize-CSS, material-ui, bootstrap</p>
                                </div>
                                <div>
                                    <h5>Tools</h5>
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>Pen and Paper</li>
                                        <li></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4 tech-intro-div">
                            <div className="more-intro-container">
                                <div className="">
                                    <img src={require("../../assets/skills/backend.png")}></img>
                                    <h5 className="role">Backend developer</h5>
                                    <p>A User Interface is not enough when you have a lot of data to bring to the app. I love bringing life to the web app by creating web services that can fill our web app with data it needs to stay alive.</p>
                                </div>
                                <div>
                                    <h5>Stack I use</h5>
                                    <p>Node.js, ExpressJS</p>
                                </div>
                                <div>
                                    <h5>Tools</h5>
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>NPM modules</li>
                                        <li></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4 tech-intro-div">
                            <div className="more-intro-container">
                                <div className="">
                                    <img src={require("../../assets/skills/database.png")}></img>
                                    <h5 className="role">Database</h5>
                                    <p>A web app without data is like me without cheeze burgers. Database is the heart of the application and it is necessary if your application is data intensive.</p>
                                </div>
                                <div>
                                    <h5>Stack I use</h5>
                                    <p>mongodb, SQL</p>
                                </div>
                                <div>
                                    <h5>Tools</h5>
                                    <ul>
                                        <li>Mongo shell</li>
                                        <li>mongodb compass</li>
                                        <li>SQL server</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default About;
