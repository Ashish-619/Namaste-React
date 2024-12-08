import React, { useState } from "react";
import headerImage from "../../Chapter04-Talk is cheap show me the code/img/food-delivery-icon.png";
import Login from "./Login";
import "../../Chapter07-Finding the path/App.css";

const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <header>
                <img src={headerImage} alt="food express" className="img-1" />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/fast-cart.png" alt="fast-cart" /></li>
                        <li>{loggedIn ? (
                            <button onClick={() => setLoggedIn(false)} className="logout-btn">Logout</button>
                        ) : (
                            <button onClick={() => setLoggedIn(true)} className="login-btn">Login</button>
                        )}
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;