import M from 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import './assets/styles/index.css';
import './components/common/commonStyle.css';
import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom';

import routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as serviceWorker from './serviceWorker';

library.add(fab, faCheckSquare, faCoffee, faFacebook, faInstagram)



M.AutoInit();

ReactDOM.render(
    <Router>{routes}</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
