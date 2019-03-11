import React from "react";
import resumePDF from "../../assets/resume/resume.pdf";

// import { Document,pdfjs } from 'react-pdf';
import { Document, Page } from "react-pdf/dist/entry.webpack";

 
class Resume extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    return (
      <div>
        <Document
          file={resumePDF}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
        </Document>
      </div>
    );
  }
}

export default Resume;

