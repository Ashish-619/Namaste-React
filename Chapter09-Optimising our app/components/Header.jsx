import React, { useContext, useState } from "react";
import headerImage from "../../Chapter04-Talk is cheap show me the code/img/food-delivery-icon.png";
import Login from "./Login";
import "../App.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Header = () => {

    const isOnline = useOnlineStatus();
    const [loggedIn, setLoggedIn] = useState(false);
    const { loggedInUser } = useContext(UserContext);

    //subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <>
            <header className="bg-customOrange p-3 flex justify-between items-center max-md:flex-col max-md:items-center">
                {/* Logo */}
                <img
                    src={headerImage}
                    alt="food express"
                    className="img-1 w-14 max-md:w-16 max-sm:w-16" // Shrinks logo size for tablets and mobile
                />
                <div className="pr-2">
                    <ul className="list-none flex justify-between gap-12 items-center max-md:gap-6 max-sm:gap-4">
                        {/* Status */}
                        <li className="flex items-center gap-2 text-lg max-md:text-base max-sm:text-sm">
                            Status:{" "}
                            {isOnline ? (
                                <img
                                    width="20"
                                    height="20"
                                    className="w-5 h-5 max-md:w-4 max-md:h-4 max-sm:w-3 max-sm:h-3"
                                    src="https://img.icons8.com/color/48/connection-status-on--v1.png"
                                    alt="online"
                                />
                            ) : (
                                <img
                                    width="20"
                                    height="20"
                                    className="w-5 h-5 max-md:w-4 max-md:h-4 max-sm:w-3 max-sm:h-3"
                                    src="https://img.icons8.com/ios-filled/50/offline.png"
                                    alt="offline"
                                />
                            )}
                        </li>
                        {/* Links */}
                        <li className="text-lg max-md:text-base max-sm:text-sm">
                            <Link to="/" className="hover:text-blue-500 transition">
                                Home
                            </Link>
                        </li>
                        <li className="text-lg max-md:text-base max-sm:text-sm">
                            <Link to="/about" className="hover:text-blue-500 transition">
                                About
                            </Link>
                        </li>
                        <li className="text-lg max-md:text-base max-sm:text-sm">
                            <Link to="/contact" className="hover:text-blue-500 transition">
                                Contact
                            </Link>
                        </li>
                        {/* Cart Icon */}
                        <li>
                            <img
                                width="24"
                                height="24"
                                className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 cursor-pointer"
                                src="https://img.icons8.com/material-outlined/24/fast-cart.png"
                                alt="fast-cart"
                            />
                            <Link to="/cart">
                                ({cartItems.length} - Items)
                            </Link>
                        </li>
                        {/* Login/Logout Button */}
                        <li>
                            {loggedIn ? (
                                <button
                                    onClick={() => setLoggedIn(false)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-lg max-md:text-base max-sm:text-sm max-md:px-3 max-md:py-1 max-sm:px-2 max-sm:py-1"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={() => setLoggedIn(true)}
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-lg max-md:text-base max-sm:text-sm max-md:px-3 max-md:py-1 max-sm:px-2 max-sm:py-1"
                                >
                                    Login
                                </button>
                            )}
                        </li>
                        <li className="px-4 font-bold">{loggedInUser}</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;