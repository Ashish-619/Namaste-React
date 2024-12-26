import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; // Ensure using `react-dom/client` for React 18
import { createBrowserRouter, RouterProvider, Outlet, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//lazy loading
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/contact"));

const App = () => {

    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        //make an api call and send username and password
        const data = {
            name: "Ashish Vaidya",
        };
        setUserName(data.name);
    }, []);

    return (
        <>
            {/* //redux store provider */}
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    {/* <Header />{/**Depending on which ContextProvider is closest(up-above) it uses that value for above Context provider the value will be default i.e "Ashish Vaidya" */}
                    {/* <UserContext.Provider value={{ loggedInUser: "Boss" }}> */}
                    <Header /> {/* Here the value will be "Boss" */}
                    {/* </UserContext.Provider> */}
                    <Outlet /> {/* Whenever we select specific path, based on it, it will show the Component. For ex- if I select "localhost:1234/about" it will give "<About />" page and likewise for other components. */}
                </UserContext.Provider>
            </Provider>
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
                element:
                    <Suspense fallback={<h1>Loading about page...</h1>}>
                        <About />
                    </Suspense>,
            },
            {
                path: '/contact',
                element:
                    <Suspense fallback={<h1>Loading contact page...</h1>}> <Contact />
                    </Suspense >,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/cart',
                element: <Cart />,
            }
        ],
        errorElement: <ErrorPage />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
