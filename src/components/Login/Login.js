import React, { Component } from 'react';
import './Login.css';


class Login extends Component {


    render() {
        const TEXTCENT={
            textAlign: 'center',
            fontSize: '3.5em',
            width: '500px',
            fontFamily: 'Orbitron',

        }
        return (
            <div className="main-login-container">
                <h1 className="login-logo"><p>P</p><p>E</p><p>A</p><p>X</p></h1>
               
                    <h4 style={TEXTCENT}>- coming soon -</h4>
                
            </div>
        )
    }
}

export default Login;