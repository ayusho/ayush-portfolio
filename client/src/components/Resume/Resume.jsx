import React from "react";
import axios from "axios";
import { saveAs } from 'file-saver';


class Resume extends React.Component {
  componentDidMount() {
    if (window.confirm('Do you want to download the resume?')) {
      axios.get('/api/resume', {
        responseType: 'blob'
      })
        .then((response) => {
          console.log(response);
          const blob = new Blob([response.data], {
            type: 'application/pdf',
          });
          var url = URL.createObjectURL(blob);
          saveAs(url, 'resume.pdf');
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {

    }


  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Resume;

