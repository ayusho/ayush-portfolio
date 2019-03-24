import React from "react";

import './resumeStyles.css';

class Resume extends React.Component {
  
  componentDidMount() {
    if (window.confirm('This page will redirect you to the new tab.')) {
          window.open(require('../../assets/resume/resume.pdf'));
    }
  }

  render() {
    return (
      <div className="heading">
        <h5>Refresh this page to download again.</h5>
      </div>
    );
  }
}

export default Resume;

