import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <Suspense><About></About></Suspense>
            },
            {
                path: "/restaurant/:resid",
                element: <Suspense><RestaurantMenu></RestaurantMenu></Suspense>
            },
        ],
        errorElement: <div>error</div>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)

