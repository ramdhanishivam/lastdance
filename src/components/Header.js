import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginOrLogout, setLoginOrLogout] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <a><img className="logo-image" src={LOGO_URL} ></img></a>
            </div>
            <div className="navigation-items">
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={(e) => {
                        e.target.innerHTML == "Login" ? setLoginOrLogout("Logout") : setLoginOrLogout("Login")
                    }}>{loginOrLogout}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;