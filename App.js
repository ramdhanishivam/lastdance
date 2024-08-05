import React from "react";
import ReactDOM from "react-dom/client";
import "/app.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <a>
                    <img className="logo-image" src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg" ></img>
                </a>
            </div>
            <div className="navigation-items">
                <ul>
                    <li>About us</li>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <h3>Gullu Dada Biryani</h3>
            <img className="logo-image" src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg" ></img>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Enter the name"></input>
                <button>Click to search</button>
            </div>
            <div className="restaurant-list">
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
            </div>
        </div>
    );
}

const Footer = () => {
    return  (
        <div className="footer">
            <div className="footer-items">
                <ul>
                    <li>Instagram</li>
                    <li>Query Form</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)

