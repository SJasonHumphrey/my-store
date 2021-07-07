import React from "react";
import { Link } from 'react-router-dom'
import './styles.scss';
import logo from './images/logo.png'
import { auth } from "../../Firebase/utils";

const Header = props => {
    const { currentUser } = props;
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="The Bass Place Logo" width="50%" />
                    </Link>
                </div>
                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={()=>auth.signOut()}>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    REGISTER
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    LOGIN
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
};
Header.defaultProps = {
    currentUser: null
};
export default Header;