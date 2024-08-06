import React from "react";
import ReactDOM from "react-dom/client";
import "/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

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

