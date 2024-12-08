import React from "react";
import ReactDOM from "react-dom/client"; // Ensure using `react-dom/client` for React 18
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./ErrorPage";
import About from "./components/About";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

const App = () => {
    return (
        <>
            <Header />
            <Outlet /> {/* Whenever we select specific path, based on it, it will show the Component. For ex- if I select "localhost:1234/about" it will give "<About />" page and likewise for other components. */}
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <ErrorPage />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
