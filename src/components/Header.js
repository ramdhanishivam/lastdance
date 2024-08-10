import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
    const [loginOrLogout, setLoginOrLogout] = useState("Login");
    return (
        <div className="flex justify-between p-3 m-4 bg-slate-50 border-4">
            <div className="">
                <a><img className="w-16 rounded-2xl" src={LOGO_URL} ></img></a>
            </div>
            <div className="">
                <ul className="flex list-none font-extralight">
                    <li className="p-3 m-4"><Internet></Internet></li>
                    <li className="p-3 m-4"><Link to="/about">About us</Link></li>
                    <li className="p-3 m-4"><Link to="/">Home</Link></li>
                    <li className="p-3 m-4">Contact Us</li>
                    <li className="p-3 m-4">Cart</li>
                    <li className="p-3 m-4"><button className="border-2 w-16" onClick={(e) => {
                        e.target.innerHTML == "Login" ? setLoginOrLogout("Logout") : setLoginOrLogout("Login")
                    }}>{loginOrLogout}</button></li>
                </ul>
            </div>
        </div>
    );
}

const Internet = () => {
    const internetStatus = useInternetStatus();
    return (
        internetStatus ? <div>{"Online " + '✅'}</div> : <h3>{"Offline "+'🛑'}</h3>
    );
}

export default Header;