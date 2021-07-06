import React from "react";
import './styles.scss';
import logo from './images/logo.png'

const Header = props => {
    return(
        <header className="header">
        <div className="wrap">
            <div className="logo">
                <img src={logo} alt="The Bass Place Logo" width="50%"/>
            </div>
        </div>
        </header>
    )
};

export default Header;