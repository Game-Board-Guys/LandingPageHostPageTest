import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login';


ReactDOM.render(
    <Router>
            <Login />
    </Router>,
    document.getElementById('root')
);